'use strict';

// Register `charList` component, along with its associated controller and template
angular.
  module('characterList').
  component('characterList', {
    templateUrl: 'character-list/character-list.template.html',
    controller: ['Character',
      function CharacterListController(Character){

        this.characters = Character.query();
        this.orderProp = 'age';
      
      }
    ]
  });