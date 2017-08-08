import * as angular from 'angular';
import controller from './atmiraSelect.controller';

const templateUrl = require('../views/atmiraSelect.html');
const transclude = true;
const bindings = {
    placeholder: "@",
    list: "=",
    selected: "=ngModel",
    selectedValue: '<',
    atWidth: "@",
    property: "@",
    atatRequired: "<?",
    atDisabled: '<?',
    onChange: '&?'
};
const require = {
    ngModel: 'ngModel',
};

const atSelect = {
    controller,
    templateUrl,
    transclude,
    bindings,
    require
}

export default atSelect;