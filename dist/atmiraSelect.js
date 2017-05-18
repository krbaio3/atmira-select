(function () {
	'use strict';
	angular
	.module("atmira.ui.select", [])
	.component('atSelect', {
		bindings: {
			placeholder: "@",
			list: "=",
			selected: "=ngModel",
			selectedValue: '<',
			atWidth: "@",
			property: "@",
			atatRequired: "<?",
			atDisabled: '<?',
			onChange: '&?'
		},
		require: {
			ngModel: 'ngModel',
		},
		controller: controllerSelect,
		templateUrl: 'bower_components/atmira-ui-select/dist/atmiraSelect.html'
	});

	function controllerSelect($element, $scope) {
		var vm = this;
		vm.$onInit = function() {
			var ngModel = vm.ngModel;
		};
		vm.listVisible = false;
		if(vm.selected !== undefined){
			vm.atRequired = false;
			vm.isPlaceholder = false;
		}else{
			vm.isPlaceholder = true;
		}
		vm.select = function (item) {
			vm.ngModel.$setTouched();
			vm.ngModel.$validate();
			vm.atRequired = false;
			vm.isPlaceholder = false;
			vm.selected = item;
			vm.listVisible = false;
			if(vm.onChange){

				vm.onChange();
			}
		};
		vm.isSelected = function (item) {
			return item === vm.selected;
		};
		vm.closeSelect = function () {
			vm.listVisible = false;
		};
		vm.openSelect = function () {
			if(vm.atDisabled) {
				vm.listVisible = undefined;
			} else {
				vm.listVisible = !vm.listVisible;
			}
		};
		if (vm.atWidth != null || vm.atWidth != undefined) {
			angular.element($element[0].children[0]).css("width", vm.atWidth);
		} else {
			angular.element($element[0].children[0]).css("width", "auto");
		}
	}
})();
