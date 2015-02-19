$(function () {
  var alumniCollection = new AlumniCollection();

   alumniCollection.fetch().then(function () {
     var collectionView = new CollectionView({collection: alumniCollection});
     console.log(collectionView);
   });
});
