
//creates instance of alumni collection and grabs from server
$(function () {
  var alumniCollection = new AlumniCollection();

   alumniCollection.fetch().then(function () {
     var collectionView = new CollectionView({collection: alumniCollection});
     console.log(collectionView);
   });

//EMPLOYER COLLECTION

   var employerCollection = new EmployerCollection();

    employerCollection.fetch().then(function () {
      var collectionView2 = new CollectionView2({collection: employerCollection});
      console.log(collectionView2);
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
    //toggle searching alumni/employers
    $('#alumniCheckBox').on('click', function () {
      $('#alumQuery').removeClass('invis');
      $('#employerQuery').addClass('invis');
      $('#alumniCheckBox').removeClass('fa-square-o');
      $('#employerCheckBox').addClass('fa-square-o');
      $('#alumniCheckBox').addClass('fa-check-square-o');
      $('#employerCheckBox').removeClass('fa-check-square-o');
    });
    $('#employerCheckBox').on('click', function () {
      $('#employerQuery').removeClass('invis');
      $('#alumQuery').addClass('invis');
      $('#employerCheckBox').removeClass('fa-square-o');
      $('#alumniCheckBox').addClass('fa-square-o');
      $('#employerCheckBox').addClass('fa-check-square-o');
      $('#alumniCheckBox').removeClass('fa-check-square-o');
    });
  }
}

$(document).ready( function () {
  methods.init();
});
