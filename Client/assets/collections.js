var AlumniCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/graduates.json',
  model: AlumniModel
});
