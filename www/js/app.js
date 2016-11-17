// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app= angular.module('purdueSC', 
                        ['ionic',
                          'ngMap',
                          'ngCordova',
                         'purdueSC.services',
                         'purdueSC.controllers',
                         ])

app.run(function($rootScope, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });


  
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('app.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      }
    }
  })

  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        }
      }
    })
    .state('app.shuttle', {
      url: '/shuttle',
      views: {
        'menuContent': {
          templateUrl: 'templates/shuttle.html'
        }
      }
    })
    .state('app.toMap', {
      url: '/toMap/:listId',
      views: {
        'menuContent': {
          templateUrl: 'templates/toMap.html',
          controller: 'toMapCtrl'
        }
      }
    })
  .state('app.bus', {
      url: '/bus',
      views: {
        'menuContent': {
          templateUrl: 'templates/bus.html'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
