(function() {
    'use strict';

    angular
        .module('app')
        .controller('AccountController', AccountController);

    AccountController.$inject = [];

    /* @ngInject */
    function AccountController() {
        var vm = this;

        // METHODS

        // VARIABLES
        vm.settings = {
            enableFriends: true
        };


        ionic.Platform.ready(function(){
            activate();
        });

        ////////////////

        function activate() {
        }
    }
})();