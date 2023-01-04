const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  });
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;