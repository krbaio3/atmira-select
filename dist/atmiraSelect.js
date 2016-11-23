(function(angular) {
    'use strict';
    angular.module('atmira.ui.select', [])
        .directive('atSelect', function($rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'bower_components/atmira-ui-select/dist/atmiraSelect.min.html',
                scope: {
                    placeholder: '@',
                    list: '=',
                    selected: '=ngModel',
                    atWidth: '@'
                },
                link: function(scope, element, attrs) {
                    scope.listVisible = false;
                    scope.isPlaceholder = true;
                    scope.close = false;


                    scope.select = function(item) {
                        scope.isPlaceholder = false;
                        scope.selected = item;
                        scope.listVisible = false;
                    };

                    scope.isSelected = function(item) {
                        return item === scope.selected;
                    };

                    scope.show = function() {
                        scope.listVisible = !scope.listVisible;
                        scope.close = false;
                    };

                    if (scope.atWidth !== null || scope.atWidth !== undefined) {
                        angular.element(element[0].children[0]).css('width', scope.atWidth);
                    } else {
                        angular.element(element[0].children[0]).css('width', 'auto');
                    }


                    $rootScope.$on('clicked', function(target) {
                        if (scope.close) {
                            if (scope.listVisible) {
                                scope.$apply(function() {
                                    scope.listVisible = false;
                                    scope.close = false;
                                });
                            }
                        }
                        if (scope.listVisible) {
                            scope.$apply(function() {
                                scope.close = true;
                            });
                        }
                    });

                    scope.$watch('selected', function(value) {
                        scope.isPlaceholder = scope.selected === undefined;
                        scope.display = scope.selected;
                    });
                }
            };
        })

    .run(function($rootScope) {
        angular.element(document).on('click', function() {
            $rootScope.$broadcast('clicked');
        });
    });

    $('li#disabled').unbind('click');
})(angular);
