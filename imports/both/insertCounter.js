Meteor.methods({
    insertCounter(counter) {
        Collections.Messages.insert({counter: counter})
    },
})