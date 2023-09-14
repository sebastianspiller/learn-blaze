FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render("main", {area: 'homepage'});
    },
})