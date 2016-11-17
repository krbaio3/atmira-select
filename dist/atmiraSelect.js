(function () {
	'use strict';
	angular
	.module("atmira.ui.select", [])
	.component('atSelect', {
		bindings: {
			placeholder: "@",
			list: "=",
			selected: "=ngModel",
			atWidth: "@",
			property: "@",
			atRequired: "@"
		},
		controller: controllerSelect,
		templateUrl: 'bower_components/atmira-ui-select/dist/atmiraSelect.html'
	});

	function controllerSelect($element) {
		var vm = this;
		vm.atRequired !== undefined ? vm.required = true : vm.required = false;
		vm.listVisible = false;
		if(vm.selected !== undefined){
			vm.isPlaceholder = false;
			vm.display = vm.selected;
		}else{
			vm.isPlaceholder = true;
		}
		vm.select = function (item) {
			vm.required = false;
			vm.isPlaceholder = false;
			vm.selected = item;
			vm.listVisible = false;
			vm.display = vm.selected;
		};
		if (vm.atRequired !== undefined) {
			vm.required = true;
		}
		vm.isSelected = function (item) {
			return item === vm.selected;
		};
		vm.closeSelect = function () {
			vm.listVisible = false;
		}
		vm.openSelect = function () {
			vm.listVisible = !vm.listVisible;
		};

		if (vm.atWidth != null || vm.atWidth != undefined) {
			angular.element($element[0].children[0]).css("width", vm.atWidth);
		} else {
			angular.element($element[0].children[0]).css("width", "auto");
		}

	}
})()
