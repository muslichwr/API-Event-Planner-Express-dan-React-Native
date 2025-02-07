const {body,param} = require ('express-validator');

const createEventValidation = [
    body('title').notEmpty().withMessage('Judul acara wajib diisi'),
    body('description').notEmpty().withMessage('Deskripsi acara wajib diisi'),
    body('date')
        .isISO8601()
        .withMessage('Format tanggal tidak valid'),
    body('location').notEmpty().withMessage('Lokasi acara wajib diisi'),
    body('userId').isInt().withMessage('User ID harus berupa angka'),
];

const deleteEventValidation = [
    param('id').isInt().withMessage('ID event harus berupa angka'),
];

module.exports = {
    createEventValidation,
    deleteEventValidation,
};