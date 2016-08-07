angular.module('seanStackApp')
  .controller('imageCtrl', function($scope, imageSvc){

    $scope.getImages = function(){
      imageSvc.callImages()
      .then(function(response){
        $scope.image = response;
      });
    };

    $scope.getImages();

    $scope.createImage = function(title, description, imageurl){
      imageSvc.sendImageDB(title, description, imageurl)
      .then(function(){
        $scope.getImages();
        alert('Thank you for sharing ' + title + '!');
      });
    };

    $scope.deleteImage = function(id){
      imageSvc.deleteImageDB(id)
      .then(function(response){
        alert('Image removed!');
        $scope.getImages();
      });
    };

    $scope.updateImage = function(id, title, description, imageurl) {
      console.log(id);
      imageSvc.updateImageDB(id, title, description, imageurl)
      .then(function(response){
        alert('Image updated!');
        $scope.getImages();
      });
    };




});
