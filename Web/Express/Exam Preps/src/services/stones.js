const mongoose = require('mongoose');
const { Stone } = require('../models/Stones');



async function getStones() {
    try {
        return await Stone.find().lean();
    } catch (err) {
        throw err
    }
}

async function getStoneById(id) {
    try {
        return await Stone.findById(id).lean();
    } catch (err) {
        throw err
    }
}

async function createStone(data, ownerId) {
    const { name, category, color, image, location, formula, description } = data;

    try {
        const stone = new Stone({
            name,
            category,
            color,
            image,
            location,
            formula,
            description,
            owner: ownerId
        });
        return await stone.save();
    } catch (err) {
        throw err
    }
}

async function likeStone(id, userId) {
    try {
        const stone = await Stone.findById(id);
        if (stone.likedList.some(id => id.equals(userId))) {
            throw new Error('You have already liked this')
        }
        stone.likedList.push(userId);
        stone.save();
    } catch (err) {
        throw err
    }
}

async function editStone(data, id) {
    const { name, category, color, image, location, formula, description } = data;
    try {
        return await Stone.findByIdAndUpdate(id, {
            name,
            category,
            color,
            image,
            location,
            formula,
            description
        }, { new: true }).lean();

    } catch (err) {
        throw err
    }
}

async function deleteStone(id) {
    try {
        await Stone.findByIdAndDelete(id)
    } catch (err) {
        throw err
    }
}

async function searchStones(name) {
    try {
        return await Stone.find({ name: new RegExp(name, 'i') }).lean();
    } catch (err) {
        console.log(err);
        throw err
    }
}

module.exports = {
    createStone,
    getStones,
    getStoneById,
    likeStone,
    deleteStone,
    editStone,
    searchStones
}