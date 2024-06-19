const { Router } = require('express');
const { getStones, getStoneById, likeStone, deleteStone, editStone, searchStones } = require('../services/stones');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');
const { body, validationResult } = require('express-validator');

const catalogRouter = Router();

catalogRouter.get('/', (req, res) => {
    res.render('home');
});

catalogRouter.get('/dashboard', async (req, res) => {
    try {
        const stones = await getStones();

        res.render('dashboard', { stones });
    } catch (err) {
        res.render('dashboard')
    }
})

catalogRouter.get('/details/:id', async (req, res) => {
    const id = req.params.id;


    try {
        const stone = await getStoneById(id);
        if (!stone) {
            res.status(404).render('404');
            return;
        }
        stone.hasUser = res.locals.hasUser;
        stone.isOwner = req.user?._id == stone.owner.toString();
        stone.hasLiked = stone.likedList.some(id => id.equals(req.user?._id));


        res.render('details', { stone });
    } catch (err) {
        console.log(err);
        res.redirect('/dashboard');
    }




})

catalogRouter.get('/search', async (req, res) => {
    try {
        let stones = [];
        const { name } = req.query;
        if (name) {
            stones = await searchStones(name);
        } else {
            stones = await getStones();
        }

        res.render('search', { stones, name });

    } catch (err) {

    }
})



module.exports = {
    catalogRouter
}