var AlumniCollection = Backbone.Collection.extend({
  url: 'https://frozen-basin-2630.herokuapp.com/graduates.json',
  model: AlumniModel
});

var EmployerCollection = Backbone.Collection.extend({
  url: 'https://frozen-basin-2630.herokuapp.com/employers.json',
  model: EmployerModel
});
