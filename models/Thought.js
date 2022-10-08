const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

//function to set timestamp
function timeStamp(createdAt) {
  return (
    [
      createdAt.getDate(),
      createdAt.getMonth() + 1,
      createdAt.getFullYear(),
    ].join("/") +
    " " +
    [createdAt.getHours(), createdAt.getMinutes(), createdAt.getSeconds()].join(
      ":"
    )
  );
}

//Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createAt: {
      Date,
      default: Date.now,
      get: timeStamp,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      //Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtuals("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
