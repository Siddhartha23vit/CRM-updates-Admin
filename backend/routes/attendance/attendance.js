const AttendanceModel = require("../../models/attendance");
const moment = require("moment-timezone");

const attendance = {
  markattendance: async (req, res) => {
    try {
      const attendanceData = req.body;

      const currentDateIST = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");

      for (const userId in attendanceData) {
        const status = attendanceData[userId];
        let attendanceRecord = await AttendanceModel.findOne({ user: userId });

        if (!attendanceRecord) {
          attendanceRecord = new AttendanceModel({ user: userId, status: {} });
        }

        attendanceRecord.status = {
          ...attendanceRecord.status,
          [currentDateIST]: status,
        };

        await attendanceRecord.save();
      }

      res.json({ message: "Attendance updated successfully" });
    } catch (err) {
      console.error("Error updating attendance:", err);
      res.status(500).json({ error: "Failed to update attendance" });
    }
  },
  getattendance: async (req, res) => {
    try {
      const { userId, startDate, endDate } = req.body;

      const attendanceRecord = await AttendanceModel.findOne({ user: userId });

      if (!attendanceRecord) {
        return res
          .status(404)
          .json({ error: "Attendance record not found for the user" });
      }

      keys = Object.keys(attendanceRecord.status);
      startIndex = keys.indexOf(startDate);
      endIndex = keys.indexOf(endDate);

      if (startIndex === -1) {
        startIndex = 0;
      }

      if (endIndex === -1) {
        endIndex = keys.length - 1;
      }

      const newRecord = await Object.entries(attendanceRecord.status)
        .slice(startIndex, endIndex + 1)
        .reduce((obj, [date, status]) => {
          obj[date] = status;
          return obj;
        }, {});
      res.status(200).send(newRecord);
    } catch (err) {
      console.error("Error fetching attendance:", err);
      res.status(500).json({ error: "Failed to fetch attendance" });
    }
  },
};

module.exports = attendance;
