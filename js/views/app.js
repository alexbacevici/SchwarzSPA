var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#clientList',
    initialize: function() {
        this.listenTo(app.Clients, 'add', this.addOne);
        this.listenTo(app.Clients, 'reset', this.addAll);
    },
    addOne: function(client) {
        var view = new app.ClientView({ model: client });
        $('#clientList-template').append(view.render().el);
    },
    addAll: function() {
        this.$('#clientList-template').html('');
        app.Clients.each(this.addOne, this);
    }
});