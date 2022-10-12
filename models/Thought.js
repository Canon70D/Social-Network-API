const { Schema, model, Types } = require("mongoose");

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

//subdocument schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    get: timeStamp,
  },
});

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
      type: Date,
      default: Date.now,
      get: timeStamp,
    },
    username: {
      type: String,
      trf: "user",
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      //Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  //Create a getter for the virtual that returns reaction count
  return `${this.reactions.length}`;
});

// Initialize Thought model
const Thought = model("thought", thoughtSchema);
module.exports = Thought;
