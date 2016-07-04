(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashController', DashController);

    DashController.$inject = [];

    /* @ngInject */
    function DashController() {
        var vm = this;

        // METHODS

        // VARIABLES

        ionic.Platform.ready(function(){
            activate();
        });

        ////////////////

        function activate() {
        }
    }
})();