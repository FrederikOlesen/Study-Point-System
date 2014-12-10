//'use strict';
//
///* https://github.com/angular/protractor/blob/master/docs/toc.md */
//
//describe('my app', function() {
//
//  browser.get('/');
//
//  it('should automatically redirect to /frontpage when location hash/fragment is empty', function() {
//    expect(browser.getLocationAbsUrl()).toMatch("/frontpage");
//  });
//
//
//  describe('frontpage', function() {
//
//    beforeEach(function() {
//      browser.get('#/frontpage');
//    });
//
//
//    it('should render frontpage when user navigates to /frontpage', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 1/);
//    });
//
//  });
//
//
//  describe('student', function() {
//
//    beforeEach(function() {
//      browser.get('#/student');
//    });
//
//
//    it('should render student when user navigates to /student', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
//});
