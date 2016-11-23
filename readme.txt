//how to use
//inject in angular.module('app', ['atmira-ui-select'])
//inject in view.html <at-select placeholder="Selec. opción" list="dataSearchCtrl.tipoEntidadArray" ng-model="dataSearchCtrl.tipoEntidad" at-width="168px" class="clearfix"></at-select>
//inject <script src="./bower_components/atmira-ui-select/dist/atmiraSelect.js"></script> into index.html 
//inject <link rel="stylesheet" href="./bower_components/atmira-ui-select/dist/atmiraSelect.min.css"> into index.html
placeholder -- string -- to show the placeholder value.
list -- object -- list of elements to show in the dropdown.
ng-model -- string -- save the value in variable to show it in the select box. 

!important
Add class to set width property in CSS.

Example Array
var tipoDocumentoArray = [
	'OTROS PF',
	'OTROS PJ',
	'DNI',
	'CI',
	'TR',
	'PASAPORTE',
	'CI PAIS OR',
	'DOC.ID.EXT.',
	'T.ID.DIPLO',
	'MENOR'
];

list = ng-repeat

at-width = (style= width: ?px)

if at-width is empty, at-width = (style= width: auto;)