const { Schema, Types } = require("mongoose");

// reaction schema
const reactionSchema = new Schema(
  {
    // reactionId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // reactionBody
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // username
    username: {
      type: String,
      required: true,
    },
    // createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toDateString(),
    },
  },
  {
    // toJSON
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// thought schema
const thoughtSchema = new Schema(
  {
    // thoughtText
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toDateString(),
    },
    // username
    username: {
      type: String,
      required: true,
    },
    // reactions
    reactions: [reactionSchema],
  },
  {
    // toJSON
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// reactionCount virtual
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
