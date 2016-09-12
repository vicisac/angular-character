'use strict';

angular.
module('core.char').
factory('Character', ['$resource',
    function($resource) {
        return $resource('characters/:charId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'characters'},
                isArray: true
            }
        });
    }
]);