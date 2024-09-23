const express = require('express');
const router = express.Router();
const maan = require('../controller/controller');
router.get('/', maan.m);
router.get('/About', maan.about);
router.get('/Blog', maan.blog);
router.get('/Contact', maan.contact);
router.get('/Product', maan.product);
router.get('/Testimonial', maan.testimonial);

module.exports = router;