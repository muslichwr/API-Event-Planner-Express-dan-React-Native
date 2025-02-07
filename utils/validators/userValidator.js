const {body} = require('express-validator');

const registerValidation= [
    body('name').notEmpty().withMessage('Nama wajib diisi'),
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password')
        .isLength({min:3})
        .withMessage('Password minimal 3 karakter'),
];

const loginValidation = [
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password').notEmpty().withMessage('Password wajib diisi'),
];

module.exports = {
    registerValidation,
    loginValidation,
};