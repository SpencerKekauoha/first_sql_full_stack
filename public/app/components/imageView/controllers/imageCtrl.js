angular.module('seanStackApp')
  .controller('imageCtrl', function($scope, imageSvc){

    $scope.getImages = imageSvc.callImages()
      .then(function(response){
        $scope.image = response;
      });

    $scope.createImage = function(image){
      imageSvc.sendImageDB(image)
      .then(function(){
        alert('Thank you for sharing ' + title + '!');
      });
    };

    $scope.deleteImage = function(id){
      console.log(id);
      imageSvc.deleteImageDB(id)
      .then(function(response){
        alert('Image removed!');
      });
      $scope.getImages();
    };



});
