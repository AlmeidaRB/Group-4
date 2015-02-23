


var App = {};
$(function () {
  App.router = new Router();
  Backbone.history.start();
})

var methods = {
  init: function () {
    methods.initStyle();
    methods.initEvents();
  },
  initStyle: function () {
    methods.graduatesMode();
  },
  initEvents: function () {
    //sends grad search query to db
    $('#searchGraduates').on('click', function (e) {
      e.preventDefault();
      $.ajax({
        url:'https://frozen-basin-2630.herokuapp.com/graduates/search_graduates.json',
        type:'GET',
        data:{
          position: $('#gradPosQuery').val(),
          location: $('#gradLocQuery').val()
        },
        success:function(recieved){
          $('section').html('');
          console.log(recieved);
          var searchedGradCollection = new AlumniCollection(recieved);
          Router.loadView(new CollectionView({collection: searchedGradCollection}));
          $('#gradPosQuery').selectedIndex=0;
          $('#gradPosQuery').selectedIndex=0;
          $('section').css({'margin-top':'48px'});
        },
        error:function(error){
          console.log('ajax error');
        }
      });
      console.log($('#gradPosQuery').val());
      console.log($('#gradLocQuery').val());
    });
    //sends empl search query to db
    $('#searchEmployers').on('click', function (e) {
      e.preventDefault();
      $.ajax({
        url:'https://frozen-basin-2630.herokuapp.com/employers/search_employers.json',
        type:'GET',
        data:{
          position: $('#emplPosQuery').val(),
          location: $('#emplLocQuery').val()
        },
        success:function(recieved){
          $('section').html('');
          console.log(recieved);
          var searchedEmplCollection = new AlumniCollection(recieved);
          Router.loadView(new CollectionView({collection: searchedEmplCollection}));
          $('#emplPosQuery').selectedIndex=0;
          $('#emplPosQuery').selectedIndex=0;
          $('section').css({'margin-top':'48px'});
        },
        error:function(error){
          console.log('ajax error');
        }
      });
      console.log($('#emplPosQuery').val());
      console.log($('#emplLocQuery').val());
    });
    //handles search bar toggle between grads/employees
    $('#graduateCheckBox,#employerCheckBox').on('click', function () {
      $(this).parents('li').siblings('li').children('span').addClass('fa-square-o');
      $(this).parents('li').siblings('li').children('span').removeClass('fa-check-square-o');
      $(this).removeClass('fa-square-o');
      $(this).addClass('fa-check-square-o');
      $('.toggleThis').toggleClass('invis');
      if($(this).attr("id") === 'graduateCheckBox'){
        methods.graduatesMode();
      }else if($(this).attr("id") === 'employerCheckBox'){
        methods.employerMode();
      }
    });
  },
  graduatesMode: function () {
    App.router.navigate('graduates',{trigger: true});
  },
  employerMode: function () {
    App.router.navigate('employers',{trigger: true});
  }
}

$(document).ready( function () {
  methods.init();
});

// $(function () {
// //CREATES INSTSANCE OF ALUMNI COLLECTION
//   var alumniCollection = new AlumniCollection();
//
//    alumniCollection.fetch().then(function () {
//      var collectionView = new CollectionView({collection: alumniCollection});
//      console.log(collectionView);
//    });
//
// //INSTANCE OF EMPLOYER COLLECTION
//
//    var employerCollection = new EmployerCollection();
//
//     employerCollection.fetch().then(function () {
//       var collectionView2 = new CollectionView2({collection: employerCollection});
//       console.log(collectionView2);
//     });
//
// });
