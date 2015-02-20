
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
    //   $.ajax({
    //   url:,
    //   type:'GET',
    //   data:{
    //
    //   },
    //   success:function(){
    //     console.log('ajax success');
    //   },
    //   error:function(error){
    //     console.log('ajax error');
    //   }
    // });
      console.log($('#gradPosQuery').val());
      console.log($('#gradLocQuery').val());
    });
  }
}

$(document).ready( function () {
  methods.init();
});
