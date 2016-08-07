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

    this.sendImageDB = function(title, description, imageurl) {
      var imageData = {
        title: title,
        description: description,
        imageurl: imageurl
      };
      return $http({
        method: 'POST',
        url: '/api/images',
        data: imageData
      }).then(function(response){
        return response.data;
      });
    };

    this.deleteImageDB = function(id) {
      return $http({
        method: 'DELETE',
        url: '/api/images/' + id,
        data: id
      }).then(function(response){
        return response;
      });
    };

    this.updateImageDB = function(id, title, description, imageurl) {
      var updateData = {
        id : id,
        title : title,
        description : description,
        imageurl : imageurl
      };
      return $http({
        method: 'PUT',
        url: '/api/image/' + id,
        data: updateData
      }).then(function(response){
        return response;
      });
    };

});
