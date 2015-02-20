var AlumniCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/graduates.json',
  model: AlumniModel
});

var EmployerCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/employers.json',
  model: EmployerModel
});
