'use strict';

// declare controller to myApp
myApp.controller('MainController',function($scope, $http, $routeParams){


    $scope.perso = {
        mail:"hei@knutinge.com",
        gravatar:"http://www.gravatar.com/avatar/b378e01af0a8181c1e637fc806e9f215.png?s=512",
        github:"https://github.com/knutigro",
        stack_overflow:"",
        linkedin:"https://www.linkedin.com/in/knutingegrosland",
        twitter:"http://twitter.com/knutigro",
        isAvailable:true
    };

    var image = $('.avatar img').attr('src', $scope.perso.gravatar);
    if (! image.prop('complete')) {
        image.load(function () {
            $('.avatar').toggleClass('animate');
            $('.avatar').css('margin', '40px 0 30px');
        });
    }else{
        $scope.imageLoaded = true;
        $('.avatar').css('margin', '30px');
    }

    // Ready
    $scope.htmlReady();
});
