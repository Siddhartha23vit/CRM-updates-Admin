const express = require('express');
const bookings = require("./bookings")
const router = express.Router();

router.post('/create-booking', bookings.createBooking);
router.get('/get-booking', bookings.getALlBooking);
router.get('/get-single-booking', bookings.getSingleBooking);
router.post('/update-booking', bookings.updateBooking);
router.get('/delete-booking', bookings.deleteBooking);


module.exports = router