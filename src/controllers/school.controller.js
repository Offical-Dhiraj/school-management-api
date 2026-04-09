const service = require("../services/school.service")
const schema = require("../validators/schoole.validator")
const getDistance = require("../utils/distance")


exports.addSchool = async (req, res) => {
    try {
        const { error, value } = schema.validate(req.body)

        if (error) {
            return res.status(400).json({
                message: error.message
            })
        }

        const id = await service.addSchool(value)
        res.status(201).json({
            message: " School added successfuly",
            id
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}


exports.listSchools = async (req, res) => {
    try {
        let { latitude, longitude } = req.query

        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)

        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({
                message: "Invalid location"
            })
        }

        const schools = await service.getSchools();
        const result = schools.map((s) => ({
            ...s,
            distance: getDistance(
                latitude,
                longitude,
                s.latitude,
                s.longitude
            ),
        }))
            .sort((a, b) => a.distance - b.distance)

        res.json(result)

    } catch (err) {
        console.error(err); // 👈 VERY IMPORTANT
        res.status(500).json({ message: err.message });
    }
}