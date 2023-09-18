import './login.html'

TemplateController('login', {
    state: {
        counter: 0,
    },
    onCreated() {
        console.log('onCreated')

        this.autorun(() => {
            const counter = this.state.counter
            console.log({counter})
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
        },
    },
})