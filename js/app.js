'use strict';

var api = "https://api.peermit.com/v1/";

function IndexCtrl($scope, $http) {
}

function verifyCtrl($scope, $http) {
}

var app = angular.module('peermitapp', []);

app.controller('peermitCtrl', function ($scope) {
});

app.controller('getAccountProposalsCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.chain = $routeParams.chain;
    $scope.go = function(proposal) {
         $location.path('/proposal/' + $scope.chain + '/' + proposal.id);
    }
    $scope.submit = function () {
        $http.get(api + $scope.chain + '/proposals/'+$scope.account).then(
            function(data, status) {
                    $scope.proposals = data.data;
                    $scope.error = false;
                 },
            function(data, status) {
                    $scope.error = true;
                    $scope.proposals = [];
                 });
    };
    if ($routeParams.account) {
        $scope.account = $routeParams.account;
        $scope.submit();
    }
});

app.controller('getProposalCtrl', function ($scope, $http, $routeParams) {
    $scope.chain = $routeParams.chain;
    $http.get(api + $scope.chain + '/proposal/' + $routeParams.pid).then(
        function(data, status) {
                $scope.token    = $routeParams.token
                $scope.proposal = data.data;
             },
        function(data, status) {
                $scope.proposal = [];
             });

    $scope.submit = function () {
        var error, success = undefined
        var url = api + $scope.chain + '/proposal/' + $scope.proposal.id + '/verify/' + $scope.token
        $http.get(url).then(
            function(data, status) {
                    $scope.success = data.data.status+": "+data.data.data
                    $scope.error = data.data.data;
                },
            function(data, status) {
                    $scope.success = undefined
                    $scope.error = data.data.data;
                });
    };
})

/*
 * Main Router
 */
app.config(['$routeProvider', function($routeProvider) {
     $routeProvider.
      when('/', {
       templateUrl: 'partials/index.html',
       controller: IndexCtrl
      }).
     when('/proposal/:chain/:pid', {
      templateUrl: 'partials/proposal.html',
       controller: 'getProposalCtrl'
     }).
     when('/proposal/:chain/:pid/verify/:token', {
      templateUrl: 'partials/proposal.html',
       controller: 'getProposalCtrl'
     }).
     when('/proposals/:chain', {
      templateUrl: 'partials/proposals.html',
       controller: 'getAccountProposalsCtrl'
     }).
     when('/proposals/:chain/:account', {
      templateUrl: 'partials/proposals.html',
       controller: 'getAccountProposalsCtrl'
     }).
     otherwise({
      redirectTo: '/'
     });
}]);
