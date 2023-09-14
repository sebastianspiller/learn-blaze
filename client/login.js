import './login.html'

TemplateController('login', {
    onCreated() {
        console.log('onCreated')
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
        },
    },
})