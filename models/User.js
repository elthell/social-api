const { Schema, Types } = require("mongoose");

// schema
const userSchema = new Schema(
  {
    // username
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // email
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // toJSON
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// friendCount virtual
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create model + export
const User = model("User", userSchema);
module.exports = User;
