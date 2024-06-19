const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util');
const { createStone, getStoneById, likeStone, editStone, deleteStone } = require('../services/stones');

const stonesRouter = Router();


stonesRouter.get('/add-stone', isUser(), (req, res) => {
    res.render('add-stone');
})

stonesRouter.post(
    '/add-stone',
    isUser(),
    body('name').trim().isLength(2).withMessage('Name should be atleast 2 characters.'),
    body('category').trim().isLength(3).withMessage('Category should be atleast 3 characters.'),
    body('color').trim().isLength(2).withMessage('Color should be atleast 2 characters.'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula should be between 3 and 30 characters.'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location should be between 5 and 30 characters'),
    body('description').trim().isLength(10).withMessage('Description should be atleast 10 characters.'),
    body('image').trim().custom(value => value.match(/^https?:\/\//)).withMessage('Enter a valid image url.'),
    async (req, res) => {
        const data = req.body
        try {
            const validResult = validationResult(req);
            if (validResult.errors.length) {
                throw validResult.errors;
            }

            const authorId = req.user._id;

            await createStone(data, authorId);
            res.redirect('/dashboard');


        } catch (err) {
            const data = req.body;
            res.render('add-stone', { data, errors: parseError(err).errors });
        }
    })


stonesRouter.get('/like/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    try {
        await likeStone(id, user._id);
        res.redirect('/details/' + id)
    } catch (err) {
        const stone = await getStoneById(id);

        if (user) {
            user.isOwner = stone.owner == user._id;
            user.hasLiked = stone.likedList.some(id => id.equals(user._id));
        }
        res.render('details', { stone, user, errors: parseError(err).errors });
    }
})

stonesRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    try {
        const stone = await getStoneById(id)
        if (!stone) {
            res.status(404).render('404');
            return;
        }

        if (req.user._id != stone.owner.toString()) {
            throw new Error('You are not the owner of this stone.');
        }
        res.render('edit', { stone })
    } catch (err) {
        res.redirect('/details/' + id,);
    }
})

stonesRouter.post(
    '/edit/:id',
    isUser(),
    body('name').trim().isLength(2).withMessage('Name should be atleast 2 characters.'),
    body('category').trim().isLength(3).withMessage('Category should be atleast 3 characters.'),
    body('color').trim().isLength(2).withMessage('Color should be atleast 2 characters.'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula should be between 3 and 30 characters.'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location should be between 5 and 30 characters'),
    body('description').trim().isLength(10).withMessage('Description should be atleast 10 characters.'),
    body('image').trim().custom(value => value.match(/^https?:\/\//)).withMessage('Enter a valid image url.'),
    async (req, res) => {
        const data = req.body;
        const id = req.params.id;

        try {

            const validResult = validationResult(req);
            if (validResult.errors.length) {
                throw validResult.errors;
            }

            const stone = await editStone(data, id);

            if (!stone) {
                res.status(404).render('404');
                return;
            }

            if (req.user._id != stone.owner.toString()) {
                throw new Error('You are not the owner of this stone.');
            }

            stone.hasUser = res.locals.hasUser;
            stone.isOwner = req.user?._id == stone.owner.toString();
            stone.hasLiked = stone.likedList.some(id => id.equals(req.user?._id));

            res.render('details', { stone })
        } catch (err) {
            res.render('edit', { errors: parseError(err).errors });
        }
    })

stonesRouter.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        const stone = await getStoneById(id);

        if (!stone) {
            res.status(404).render('404');
            return;
        }
        if (stone.owner.toString() != req.user._id) {
            res.redirect('/dashboard');
            return;
        }
        await deleteStone(id);
        res.redirect('/dashboard');
    } catch (err) {
        res.redirect('/dashboard');
    }
})


module.exports = {
    stonesRouter
}