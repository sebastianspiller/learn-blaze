FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render("main", {area: 'homepage'});
    },
})

FlowRouter.route('/login', {
    action: function (params) {
        BlazeLayout.render("main", {area: 'login'});
    },
})