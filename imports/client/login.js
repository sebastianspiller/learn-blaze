import _ from 'lodash'
import './login.html'

TemplateController('login', {
    state: {
        counter: 0,
    },
    onCreated() {
        console.log('onCreated')

        this.autorun(() => {
            this.state.counter = _.last(Collections.Messages.find().fetch() || [])?.counter ?? 0
        })
    },
    onRendered() {
        console.log('onRendered')
    },
    onDestroyed() {

    },
    helpers: {

    },
    events: {
        'click .js-loginButton'(event, template) {
            event.preventDefault()

            console.log('clicked', template)

            this.state.counter += 1
            Meteor.call('insertCounter', {counter: this.state.counter}, (error, result) => {
                if (error) {
                    console.error({error})
                } else {
                    console.log({result})
                }
            })
        },
    },
})