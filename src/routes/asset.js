const router = require('express').Router();
const assetModel = require('../models/assetModel')
const userModel = require('../models/userModel')

router.use('/', (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split("test")[1];
        try {
            jwt.verify(token, secret, async function (err, decoded) {
                if (err) {
                    res.status(400).json(err.message)
                }
                const user = await userModel.findOne({ _id: decoded.data })
                req.user = user._id;
                next();
            });
        }
        catch (e) {
            res.status(400).json(e.message)
        }
    }
    else {
        res.status(400).json({ message: "user invalid" })
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await postModel.find({ user: req.user });
        res.status(200).json(posts);
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const asset = await assetModel.create({
            //mention as per the schema which is to be created
        })
        res.status(200).json({
            message: "success",
            asset
        })
    } catch (e) {
        res.status(400).json({
            message: e.message
            
        })
    }
})



module.exports = router;