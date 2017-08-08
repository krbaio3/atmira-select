class AtSelectController {

    constructor($element, $scope) {
        'ngInject'

        this.listVisible = false;
        if (this.selected !== undefined) {
            this.atRequired = false;
            this.isPlaceholder = false;
        } else {
            this.isPlaceholder = true;
        };

        if (this.atWidth != null || this.atWidth != undefined) {
            angular.element($element[0].children[0]).css("width", this.atWidth);
        } else {
            angular.element($element[0].children[0]).css("width", "auto");
        }

    }

    $onInit() {
        const ngModel = this.ngModel;
    }

    select(item) {
        this.ngModel.$setTouched();
        this.ngModel.$validate();
        this.atRequired = false;
        this.isPlaceholder = false;
        this.selected = item;
        this.listVisible = false;
        if (this.onChange) {
            this.onChange();
        }
    }

    isSelected (item) {
        return item === this.selected;
    };
    closeSelect () {
        this.listVisible = false;
    }
    openSelect () {
        if (this.atDisabled) {
            this.listVisible = undefined;
        } else {
            this.listVisible = !this.listVisible;
        }
    };

}

export default AtSelectController;