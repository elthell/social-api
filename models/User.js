const { Schema, Types } = require('mongoose');

// schema
const userSchema = new Schema(
    {
        // username
        // email
        // thoughts
        // friends
    },
    {
        // to json
    }
);

// friendCount virtual

// create model + export
const User = model('User', userSchema);
module.exports = User;