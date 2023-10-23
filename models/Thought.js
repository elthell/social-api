const { Schema, Types } = require('mongoose');

// reaction schema
const reactionSchema = new Schema (
    {
        // reactionId
        // reactionBody
        // username
        // createdAt
    },
    {
        // toJSON
    }
);

// thought schema
const thoughtSchema = new Schema (
    {
        // thoughtText
        // createdAt
        // username
        // reactions
    },
    {
        // toJSON
    }
);

// reactionCount virtual

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;