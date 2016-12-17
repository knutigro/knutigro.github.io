'use strict';

// declare controller to myApp
myApp.controller('WorkController',function($scope, $http, $routeParams){

    // Libs
    $scope.lab_data =
    [{
        name:"Desktop Apps",
        content:
        [{
            name:"App Reviews",
            url:"apps/app-reviews",
            description:"App Reviews for Mac is an app that makes it super simple for Mac OS X users to keep track of user reviews for iPhone apps. App Reviews runs in the statusbar and notifies you when new reviews come in. App Reviews is written in Swift and the source code is available at GitHub with a GPL licence.",
            image:"http://knutigro.github.io/apps/app-reviews/Images/appreviews-icon-512.png"
        }]
    },{
        name:"Mobile Apps",
        content:
        [{
            name:"Foap",
            url:"https://itunes.apple.com/us/app/foap/id521142420",
            image:"http://is4.mzstatic.com/image/pf/us/r30/Purple1/v4/86/50/a4/8650a4f6-99f6-01a7-3e55-cdd9e0454fcc/mzl.sijcvhrf.png",
            description:"With Foap you too can easily sell your photos to thousands of companies all over the world. Upload a photo and make it available for purchase at www.foap.com. Foap has been my main project and dayjob since 2001."
        },{
            name:"Cirkus Imago",
            url:"https://itunes.apple.com/nz/app/cirkus-imago/id865964969?mt=8",
            image:"http://a3.mzstatic.com/nz/r30/Purple/v4/7e/35/79/7e357916-1705-cea0-fbc3-68cd41b01d11/icon350x350.jpeg",
            description:"A game based on the childrens TV show with the same name."
        },{
            name:"Anmäl Frånvaro Lidköping",
            url:"https://itunes.apple.com/us/app/anmal-franvaro-lidkoping/id1175852934",
            image:"http://is4.mzstatic.com/image/thumb/Purple122/v4/20/6a/6e/206a6ef5-84fc-fbb6-c8dc-25961c2658aa/source/175x175bb.jpg",
            description:"Nu kan du enkelt anmäla frånvaro för barn i Lidköpings kommunala förskolor och fritids. Med några klick registrerar du som vårdnadshavare heldag eller del av dag då ditt barn är frånvarande."
        },{
            name:"Rope Access Logbook",
            url:"https://itunes.apple.com/us/app/rope-access-logbook/id423566301?mt=8",
            image:"http://is5.mzstatic.com/image/thumb/Purple71/v4/98/88/ab/9888ab0c-5409-867b-3608-13efa875b44a/source/175x175bb.jpg",
            description:"Rope Access Logbook is the digital logbook for Rope Access Technicians. With Rope Access Logbook, it's super easy to log your rope access hours and get them signed by your supervisor. Your Logbook is available both on the web and on your mobile devices. Your logbook can be exported to PDF and printed to paper."
        },{
            name:"Climbingapp",
            url:"https://itunes.apple.com/se/app/climbingapp/id574645575?mt=8",
            image:"http://is3.mzstatic.com/image/pf/us/r30/Purple5/v4/08/67/34/086734db-5895-c8b3-3656-9d096afd653d/pr_source.jpg",
            description:"This is a really nice app for climbers! It will help you find your local climbing gym or elsewhere when traveling. We have more than 2000 gyms around the world in our database. Climbingapp also contains social aspects and possiblity to share boulder problems with other climbers."
        },{
            name:"Julgodiskalendern",
            url:"https://itunes.apple.com/us/app/julgodiskalendern-sotare-julkalender/id481872459?mt=8",
            image:"http://is3.mzstatic.com/image/pf/us/r30/Purple/c6/9f/da/mzm.ihohbmor.png",
            description:"Godare jul på 24 dagar. Med recept på Crazy Americans, Favoritgodis, Fransk fröjd och Sockerkickar fixar du både julstämning och perfekta presenter på en och samma gång. Julgodiskalendern has been ported to Swift for the upcomming release for 2015. "
        },{
            name:"Kuling",
            url:"http://kuling.cocmoc.com",
            image:"https://lh3.googleusercontent.com/VaV2U3DwRKOITPjelvFrZKbPw66e8DOod-dzz1CHBlhL7CqN8PhVDNyCo0uCrueqyg=w300",
            description:"Kuling collects actual wind speed and direction from a number of weather stations along the Swedish and Danish coasts. Kuling is an Andoid widget."
        },{
            name:"Balder",
            url:"https://itunes.apple.com/se/app/balder/id470326852?mt=8",
            image:"http://is5.mzstatic.com/image/pf/us/r30/Purple/v4/0f/b6/6e/0fb66ee6-b1a4-f24e-08fd-ee880be6a601/mzm.muandzli.png",
            description:"Appen som enkelt hittar lediga lokaler och bostäder i Fastighets AB Balders bestånd i hela Sverige. "
        }]
    },{
        name:"Open Source projects",
        content:
        [{
            name:"COBezierTableView",
            url:"https://github.com/knutigro/COBezierTableView",
            description:" Custom TableView written in Swift where cells are scrolling in an arc defined by a BezierPath."
        },{
            name:"GDGeoData",
            url:"https://github.com/knutigro/GDGeoData",
            description:"Swift wrapper for easy use of country and region data."
        },{
            name:"Application Support",
            url:"https://github.com/knutigro/Xcode-Plugin-Application-Support",
            description:"Application Support is a plugin for X-Code that adds a menubutton for opening Application Support folder. The plugin is part of Alcatraz package manager. (http://alcatraz.io/)"
        }]
    }];

    // Ready
    $scope.htmlReady();
});
