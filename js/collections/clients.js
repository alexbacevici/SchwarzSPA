var app = app || {};

var ClientList = Backbone.Collection.extend({
    model: app.ClientUser,
    localStorage: new Backbone.LocalStorage('clients-backbone'),
    comparator: function(client) {
        return client.get('lastname');
    }
});
app.Clients = new ClientList();