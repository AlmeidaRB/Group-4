
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
    //send
    $('#searchForm').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url:'http://10.0.10.95:9000/graduates/search_graduates.json',
        type:'GET',
        data:{
          position: $('#gradPosQuery').val(),
          location: $('#gradLocQuery').val()
        },
        success:function(){
          console.log('ajax success');
        },
        error:function(error){
          console.log('ajax error');
        }
      });
      console.log($('#gradPosQuery').val());
      console.log($('#gradLocQuery').val());
    });
  }
}

$(document).ready( function () {
  methods.init();
});
