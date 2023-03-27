const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 1024,
    },
    image: {
        url: {
            type: String,
            minlength: 2,
            maxlength: 1024,
        },
        alt: { type: String, minlength: 2, maxlength: 256 },
    },
    status: {
        type: String,
        minlength: 3,
        required: true,
    },
});

exports.Project = mongoose.model("project", projectSchema);