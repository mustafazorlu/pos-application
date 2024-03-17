const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        verify: {
            type: Boolean,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
