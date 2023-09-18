const Messages = new Mongo.Collection('messages')

Collections.Messages = Messages

const MessagesSchema = new SimpleSchema({
    counter: {
        type: SimpleSchema.Integer,
        optional: true
    }
})

Collections.Messages.attachSchema(MessagesSchema)
