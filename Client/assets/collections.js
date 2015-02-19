var AlumniCollection = Backbone.Collection.extend({
  url: 'http://10.0.10.95:3000/graduates.json',
  model: AlumniModel
});
