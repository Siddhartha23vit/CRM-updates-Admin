const bookingModel = require("../../models/booking");

const bookings = {
  createBooking: async (req, res) => {
    try {
      const bookingData = req.body;
      const newBooking = new bookingModel(bookingData);
      await newBooking.save();
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getALlBooking: async (req, res) => {
    try {
      const bookings = await bookingModel
        .find()
        .populate({ path: "visit" })
        .populate({ path: "AssociateName" });
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSingleBooking: async (req, res) => {
    try {
      const { id } = req.query;
      const booking = await bookingModel
        .findById(id)
        .populate({ path: "visit" })
        .populate({ path: "AssociateName" });
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


  updateBooking: async (req, res) => {
    try {
      const { id } = req.query;
      const bookingData = req.body;
      const updatedBooking = await bookingModel.findByIdAndUpdate(id, bookingData, { new: true });
      if (!updatedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json(updatedBooking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteBooking: async (req, res) => {
    try {
      const { id } = req.query;
      const deletedBooking = await bookingModel.findByIdAndDelete(id);
      if (!deletedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json({ message: "Booking deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = bookings;
