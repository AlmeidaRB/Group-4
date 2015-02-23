
var Router = Backbone.Router.extend({
  initialize: function(){
    window.location.hash = '';
    console.log('Router initialized');
  },
  routes: {
    'graduates': 'graduates',
    'employers': 'employers'
  },
  graduates: function () {
    $('section').html('');
    //CREATES INSTSANCE OF ALUMNI COLLECTION
    var alumniCollection = new AlumniCollection();
    alumniCollection.fetch().then(function () {
      Router.loadView(new CollectionView({collection: alumniCollection}));
    });
  },
  employers: function () {
    $('section').html('');
    //INSTANCE OF EMPLOYER COLLECTION
    var employerCollection = new EmployerCollection();
      employerCollection.fetch().then(function () {
        Router.loadView(new CollectionView2({collection: employerCollection}));
    });
  },
  loadView: function (view) {
    this.view && this.view.remove();
    this.view = view;
  }
});
