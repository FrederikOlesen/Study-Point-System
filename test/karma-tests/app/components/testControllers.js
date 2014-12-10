'use strict';
describe("first test", function () {
    beforeEach(module("myAppRename.overview"));

    describe("webServiceController", function () {
        var scope;

        var $httpBackend;

        beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET("adminApi/students/").respond([{name: 'Peter'}]);
            $controller("View4Ctrl", {$scope: scope});
        }));

        it("should set persons on scope", function () {
            $httpBackend.flush();
            expect(scope.students).toBeDefined();
        })
    })
})