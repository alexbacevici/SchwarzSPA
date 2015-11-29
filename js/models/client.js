var app = app || {};

app.ClientUser = Backbone.Model.extend({
    defaults: {
        firstname: '',
        lastname: '',
        middlename: '',
        cardType: 'Стандарт',
        registered: new Date()
    }
});