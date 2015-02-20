
//Model View

var AlumniView = Backbone.View.extend({
  template: _.template($('#alumniTmpl').html()),
  tagName: 'ul',
  className: 'bxslider',
  initialize: function () {
    console.log('AlumniView initialized');
    console.log(this.el);
  },
  events: {

  },
  render: function () {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
  }

});

// Collection View

var CollectionView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('CollectionView initialized');

    this.addAll();
  },
  events: {

  },
  addOne: function (passedAlumni) {
  var alumniView = new AlumniView({model: passedAlumni});
  this.$el.append(alumniView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
    $('.bxslider').bxSlider();
  }
});
