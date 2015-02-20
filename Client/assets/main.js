
//creates instance of alumni collection and grabs from server
$(function () {
  var alumniCollection = new AlumniCollection();

   alumniCollection.fetch().then(function () {
     var collectionView = new CollectionView({collection: alumniCollection});
     console.log(collectionView);
   });
});

//basic stuff
var methods = {
  init: function () {
    methods.initStyle();
    methods.initEvents();
  },
  initStyle: function () {


  },
  initEvents: function () {
    //send
    $('#searchForm').on('submit', function (e) {
      e.preventDefault();
      console.log($('input[name="usernameInput"]').val());
      console.log($('#gradLocQuery').val());
    });
  }
}

$(document).ready( function () {
  methods.init();
});
