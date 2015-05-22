'use strict';

// declare controller to myApp
myApp.controller('WorkController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [{
        name:"Mobile Apps",
        content:
        [{
            name:"Foap",
            url:"https://itunes.apple.com/us/app/foap/id521142420",
            image:"http://is4.mzstatic.com/image/pf/us/r30/Purple1/v4/86/50/a4/8650a4f6-99f6-01a7-3e55-cdd9e0454fcc/mzl.sijcvhrf.png",
            description:"With Foap you too can easily sell your photos to thousands of companies all over the world. Upload a photo and make it available for purchase at www.foap.com"
        },{
            name:"Climbingapp",
            url:"https://itunes.apple.com/se/app/climbingapp/id574645575?mt=8",
            image:"http://is3.mzstatic.com/image/pf/us/r30/Purple5/v4/08/67/34/086734db-5895-c8b3-3656-9d096afd653d/pr_source.jpg",
            description:"This is a really nice app for climbers! It will help you find your local climbing gym or elsewhere when traveling. We have more than 2000 gyms around the world in our database!"
        },{
            name:"Balder",
            url:"https://itunes.apple.com/se/app/balder/id470326852?mt=8",
            image:"http://is5.mzstatic.com/image/pf/us/r30/Purple/v4/0f/b6/6e/0fb66ee6-b1a4-f24e-08fd-ee880be6a601/mzm.muandzli.png",
            description:"Appen som enkelt hittar lediga lokaler och bostäder i Fastighets AB Balders bestånd i hela Sverige. "
        },{
            name:"Julgodiskalendern",
            url:"https://itunes.apple.com/us/app/julgodiskalendern-sotare-julkalender/id481872459?mt=8",
            image:"http://is3.mzstatic.com/image/pf/us/r30/Purple/c6/9f/da/mzm.ihohbmor.png",
            description:"Godare jul på 24 dagar. Med recept på Crazy Americans, Favoritgodis, Fransk fröjd och Sockerkickar fixar du både julstämning och perfekta presenter på en och samma gång. "
        }]
    },{
        name:"OSX Apps",
        content:
        [{
            name:"App Reviews",
            url:"http://knutigro.github.io/apps/app-reviews",
            description:"App Reviews easily collects reviews and ratings for your favourite apps. Super simple for iphone app developers to keep track of new reviews! App Reviews stay in your statusbar and once you get a new review you get notified. App Reviews is Open Source.",
            image:"http://knutigro.github.io/apps/app-reviews/Images/appreviews-icon-512.png"

        }]
    },{
        name:"Libraries",
        content:
        [{
            name:"COBezierTableView",
            url:"https://github.com/knutigro/COBezierTableView",
            description:" Custom TableView written in Swift where cells are scrolling in an arc defined by a BezierPath."
        },{
            name:"GDGeoData",
            url:"https://github.com/knutigro/GDGeoData",
            description:"Swift wrapper for easy use of country and region data."
        }]
    }];

    // Ready
    $scope.htmlReady();
});
