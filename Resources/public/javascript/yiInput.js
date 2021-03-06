'use stricts';

angular.module("Geo")
    .directive("yiInput",['$parse',function($parse){
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs) {
                if (attrs.ngModel) {
                    var val = attrs.value || element.text();
                    $parse(attrs.ngModel).assign(scope, val);
                }
                scope.$watch(attrs.ngModel,function(d){
                    element.attr('value',d);
                },true);
            }
        };
    }]);