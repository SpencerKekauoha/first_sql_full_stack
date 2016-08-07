angular.module('seanStackApp')
  .service('imageSvc', function($http){

    this.callImages = function() {
      return $http({
        method: 'GET',
        url: '/api/images'
      }).then(function(response){
        return response.data;
      });
    };

    this.sendImageDB = function(image) {
      console.log(image);
      return $http({
        method: 'POST',
        url: '/api/images',
        data: image
      }).then(function(response){
        return response.data;
      });
    };

    this.deleteImageDB = function(id) {
      console.log(id);
      return $http({
        method: 'DELETE',
        url: '/api/images/' + id,
        data: id
      }).then(function(response){
        return response;
      });
    };

});
