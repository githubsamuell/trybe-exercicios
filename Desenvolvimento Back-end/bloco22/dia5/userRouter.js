const router = require('express').Router();

const {
    isValidEmail,
    isValidPassword,
    isValidUsername
} = require('./middlearesValidations');

router.post('./register', isValidUsername, isValidPassword, isValidEmail, (req, res, next) =>{
    res.status(200).json({ "message": "user created"});
})

router.post('/login', isValidEmail, isValidPassword, (req, res) => {
    res.status(200).json({ token: '123456789111' })
})

module.exports = router;