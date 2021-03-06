"use strict";
(self["webpackChunkkiaz_ng"] = self["webpackChunkkiaz_ng"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 9538);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 2872);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 6376);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about/about.component */ 201);
/* harmony import */ var _components_pages_service_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/service/service.component */ 3595);
/* harmony import */ var _components_pages_service_two_service_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/service-two/service-two.component */ 617);
/* harmony import */ var _components_pages_service_three_service_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/service-three/service-three.component */ 3270);
/* harmony import */ var _components_pages_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/service-details/service-details.component */ 1365);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 5865);
/* harmony import */ var _components_pages_blog_right_sidebar_blog_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/blog-right-sidebar/blog-right-sidebar.component */ 2119);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 1286);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 3005);
/* harmony import */ var _components_pages_recent_project_recent_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/recent-project/recent-project.component */ 661);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/error/error.component */ 7753);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/team/team.component */ 9870);
/* harmony import */ var _components_pages_team_two_team_two_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/team-two/team-two.component */ 2404);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 8717);
/* harmony import */ var _fixeddepositaccount_fixeddepositaccount_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fixeddepositaccount/fixeddepositaccount.component */ 3789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4001);





















const routes = [
    { path: '', component: _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent },
    { path: 'home-two', component: _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent },
    { path: 'home-three', component: _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent },
    { path: 'service', component: _components_pages_service_service_component__WEBPACK_IMPORTED_MODULE_4__.ServiceComponent },
    { path: 'service-two', component: _components_pages_service_two_service_two_component__WEBPACK_IMPORTED_MODULE_5__.ServiceTwoComponent },
    { path: 'service-three', component: _components_pages_service_three_service_three_component__WEBPACK_IMPORTED_MODULE_6__.ServiceThreeComponent },
    { path: 'service-details', component: _components_pages_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_7__.ServiceDetailsComponent },
    { path: 'blog', component: _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent },
    { path: 'blog-right-sidebar', component: _components_pages_blog_right_sidebar_blog_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.BlogRightSidebarComponent },
    { path: 'blog-details', component: _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_10__.BlogDetailsComponent },
    { path: 'pricing', component: _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__.PricingComponent },
    { path: 'recent-project', component: _components_pages_recent_project_recent_project_component__WEBPACK_IMPORTED_MODULE_12__.RecentProjectComponent },
    { path: 'error', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__.ErrorComponent },
    { path: 'team', component: _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_14__.TeamComponent },
    { path: 'team-two', component: _components_pages_team_two_team_two_component__WEBPACK_IMPORTED_MODULE_15__.TeamTwoComponent },
    { path: 'contact', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__.ContactComponent },
    { path: 'fixeddepositaccount', component: _fixeddepositaccount_fixeddepositaccount_component__WEBPACK_IMPORTED_MODULE_17__.FixeddepositaccountComponent },
    // Here add new pages component
    { path: '**', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__.ErrorComponent } // This line will remain down from the whole pages component list
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 4879);
/* harmony import */ var _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/header/header.component */ 3401);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 2762);








class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.recallJsFuntions();
    }
    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
                $('.loader-content').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel))
            .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.loader-content').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????ProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location, {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.PathLocationStrategy
            }
        ])], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-preloader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "app-footer");
    } }, directives: [_components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 4879);
/* harmony import */ var _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/header/header.component */ 3401);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 2762);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 9538);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 2872);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 6376);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/about/about.component */ 201);
/* harmony import */ var _components_pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/service/service.component */ 3595);
/* harmony import */ var _components_pages_service_two_service_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/service-two/service-two.component */ 617);
/* harmony import */ var _components_pages_service_three_service_three_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/service-three/service-three.component */ 3270);
/* harmony import */ var _components_pages_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/service-details/service-details.component */ 1365);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 5865);
/* harmony import */ var _components_pages_blog_right_sidebar_blog_right_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/blog-right-sidebar/blog-right-sidebar.component */ 2119);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 1286);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 3005);
/* harmony import */ var _components_pages_recent_project_recent_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/recent-project/recent-project.component */ 661);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/error/error.component */ 7753);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/team/team.component */ 9870);
/* harmony import */ var _components_pages_team_two_team_two_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/team-two/team-two.component */ 2404);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 8717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-recaptcha */ 7618);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);
/* harmony import */ var _fixeddepositaccount_fixeddepositaccount_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fixeddepositaccount/fixeddepositaccount.component */ 3789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 4001);































class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule,
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_29__.NgBootstrapFormValidationModule.forRoot(),
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_29__.NgBootstrapFormValidationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__.PreloaderComponent,
        _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_5__.HomeOneComponent,
        _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__.HomeTwoComponent,
        _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__.HomeThreeComponent,
        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent,
        _components_pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__.ServiceComponent,
        _components_pages_service_two_service_two_component__WEBPACK_IMPORTED_MODULE_10__.ServiceTwoComponent,
        _components_pages_service_three_service_three_component__WEBPACK_IMPORTED_MODULE_11__.ServiceThreeComponent,
        _components_pages_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_12__.ServiceDetailsComponent,
        _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__.BlogComponent,
        _components_pages_blog_right_sidebar_blog_right_sidebar_component__WEBPACK_IMPORTED_MODULE_14__.BlogRightSidebarComponent,
        _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_15__.BlogDetailsComponent,
        _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_16__.PricingComponent,
        _components_pages_recent_project_recent_project_component__WEBPACK_IMPORTED_MODULE_17__.RecentProjectComponent,
        _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_18__.ErrorComponent,
        _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_19__.TeamComponent,
        _components_pages_team_two_team_two_component__WEBPACK_IMPORTED_MODULE_20__.TeamTwoComponent,
        _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__.ContactComponent,
        _fixeddepositaccount_fixeddepositaccount_component__WEBPACK_IMPORTED_MODULE_22__.FixeddepositaccountComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_27__.RecaptchaModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_29__.NgBootstrapFormValidationModule, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_29__.NgBootstrapFormValidationModule] }); })();


/***/ }),

/***/ 2762:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 105, vars: 0, consts: [[1, "contact-section"], ["src", "assets/img/PartnersLogo.png", "alt", "logo", 1, "img-fluid"], [1, "footer-area"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "footer-widget"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/BainesCredit2.png", "alt", "logo", 1, "img-fluid"], [1, "col-md-6"], ["src", "assets/img/apple.png", 1, "img-fluid"], ["src", "assets/img/google.png", 1, "img-fluid"], [1, "row", 2, "margin-top", "20px !important"], [1, "footer-socialn"], ["href", "#", "target", "_blank"], [1, "icofont-facebook", 2, "color", "white", "font-size", "x-large"], [1, "icofont-twitter", 2, "color", "white", "font-size", "x-large"], [1, "icofont-linkedin", 2, "color", "white", "font-size", "x-large"], [1, "icofont-instagram", 2, "color", "white", "font-size", "x-large"], [1, "email"], [1, "footer-widget", "pl-40"], [2, "border", "none !important"], [1, "icofont-simple-right"], ["routerLink", "#"], ["routerLink", "/index"], ["routerLink", "/about"], ["routerLink", "/blog"], ["routerLink", "/team"], ["routerLink", "/testimonial"], [1, "find-us"], [1, "icofont-location-pin"], [1, "icofont-phone"], ["href", "tel:+880123456789"], [1, "icofont-ui-message"], ["href", "mailto:info@kiaz.com"], [1, "bottom-footer"], [1, "row", "align-items-center"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "copyright-text", "text-end"], [1, "top-btn"], [1, "icofont-scroll-long-up"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Internet Banking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Fund your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Access Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Open an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Loan Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Find Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " 22, Norman Williams Street, SouthWest Ikoyi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "+2349031111888");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "info@bainescredit.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\u00A92022 Baines Credit Microfinance Bank. All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3401:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);



const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 53, vars: 8, consts: [[1, "header-section", 2, "background-color", "white"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-12"], [1, "header-widget"], [2, "color", "darkblue"], [1, "icofont-clock-time"], [1, "col-md-4"], [1, "header-social", "text-end"], ["target", "_blank", "href", "#"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-linkedin"], [1, "icofont-instagram"], [1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/BainesCredit2.png", "alt", "logo", 1, "img-fluid"], [1, "main-nav"], [1, "navbar", "navbar-expand-md", "navbar-light"], ["href", "index.html", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu", 2, "color", "white"], [1, "navbar-nav", "ms-auto", 2, "color", "white"], [1, "nav-item"], ["routerLink", ".", "routerLinkActive", "active", 1, "nav-link", 2, "color", "white", 3, "routerLinkActiveOptions"], ["routerLink", ".", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "navbar-button"], ["routerLink", "."], [1, "row"], [1, "col-lg-12"], ["src", "assets/img/AccountCreationHeader.png", "alt", "bainescredit", 1, "img-fluid"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Opening Hours: Mon - Fri, 08:00AM - 05:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Internet Banking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4879:
/*!*********************************************************************!*\
  !*** ./src/app/components/layouts/preloader/preloader.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.??fac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 9, vars: 0, consts: [[1, "loader-content"], [1, "d-table"], [1, "d-table-cell"], ["id", "loading-center"], ["id", "loading-center-absolute"], ["id", "object_one", 1, "object"], ["id", "object_two", 1, "object"], ["id", "object_three", 1, "object"], ["id", "object_four", 1, "object"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 201:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 222, vars: 0, consts: [[1, "about-title", "about-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "about-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "about-style-two", "about-style-three", "pt-100", "pb-70"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-lg-6", "p-0"], [1, "about-img"], ["src", "assets/img/about-two.png", "alt", "about image"], [1, "col-lg-6"], [1, "about-text"], [1, "section-head"], [1, "icofont-check-circled"], [1, "theme-button"], ["routerLink", "/", 1, "default-btn"], [1, "counter-section", "pt-100", "pb-70", "mb-0"], [1, "col-lg-5"], [1, "offer-text"], [1, "col-lg-7"], [1, "counter-area"], [1, "row"], [1, "col-lg-5", "col-md-3", "col-6", "offset-lg-1"], [1, "counter-text"], [1, "counter"], [1, "col-lg-5", "col-md-3", "col-6"], [1, "counter-shape"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"], ["src", "assets/img/counter/shape-1.png", "alt", "bubble shape"], [1, "process-section", "process-style-two", "pt-100", "pb-70"], [1, "section-head", "blue-title", "text-center"], [1, "col-md-4"], [1, "process-card"], [1, "icofont-touch"], ["src", "assets/img/process-pattern-2.png", "alt", "arrow"], [1, "icofont-world"], [1, "icofont-recycle-alt"], [1, "team-section", "team-style-two", "team-style-three", "pb-70"], [1, "section-head", "text-center"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "team-card"], [1, "team-img"], ["src", "assets/img/team/1.png", "alt", "team member"], [1, "team-social"], ["href", "#", "target", "_blank"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-linkedin"], [1, "icofont-instagram"], [1, "team-text"], ["src", "assets/img/team/2.png", "alt", "team member"], ["src", "assets/img/team/3.png", "alt", "team member"], ["src", "assets/img/team/4.png", "alt", "team member"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "We have been doing projects since 2008.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "It is a long fact that a reader will be distracted by the readable content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " 100% Secured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Fast & Clean Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Well Disciplined ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " 24/7 Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Budget Oriented ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Online Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Job Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Experts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "How Do We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Choose Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Booking Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Enjoy Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "section", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Head of Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Marry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Eve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1286:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/blog-details/blog-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogDetailsComponent.??fac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
BlogDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 128, vars: 0, consts: [[1, "blog-title", "blog-title-bg", "bg-2"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "blog-title-text"], ["routerLink", "/index"], [1, "icofont-rounded-double-right"], ["routerLink", "/blog"], [1, "blog-details-area", "blog-details-page-area", "pt-100"], [1, "row"], [1, "col-lg-8"], ["src", "assets/img/blog/7.png", "alt", "service"], [1, "blog-details-post"], [1, "blog-post-title"], [1, "icofont-calendar"], [1, "icofont-ui-user"], ["href", "#"], [1, "page-button"], [1, "col-md-3"], [1, "theme-button"], ["routerLink", "/", 1, "default-btn"], [1, "icofont-rounded-left"], [1, "col-md-3", "offset-md-6"], [1, "icofont-rounded-right"], [1, "col-lg-4", "main-service-area", "blog-side-bar"], [1, "service-sidebar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "icofont-search-1"], [1, "service-list"], [1, "tags"], [1, "discount-text"], ["href", "#", 1, "default-btn"], [1, "discount-shapes"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Blog Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Enjoy the working time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Previous Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Next Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Toilet Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Stay Hygienic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Cleaning Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Cleaning Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Wash Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Most Popular Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Enjoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Clean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Hygienic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2119:
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/blog-right-sidebar/blog-right-sidebar.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRightSidebarComponent": () => (/* binding */ BlogRightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class BlogRightSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogRightSidebarComponent.??fac = function BlogRightSidebarComponent_Factory(t) { return new (t || BlogRightSidebarComponent)(); };
BlogRightSidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogRightSidebarComponent, selectors: [["app-blog-right-sidebar"]], decls: 196, vars: 0, consts: [[1, "blog-title", "blog-title-bg", "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "blog-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "blog-section", "blog-style-two", "blog-details-area", "blog-left-sidebar", "pt-100", "blog-right-sidebar-area"], [1, "row"], [1, "col-lg-8"], [1, "col-md-6"], [1, "blog-area"], [1, "blog-img"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/1.png", "alt", "blog image"], [1, "blog-text"], [1, "icofont-calendar"], [1, "icofont-ui-user"], ["href", "#"], ["routerLink", "/blog-details", 1, "blog-btn"], [1, "icofont-rounded-right"], ["src", "assets/img/blog/2.png", "alt", "blog image"], ["src", "assets/img/blog/3.png", "alt", "blog image"], ["src", "assets/img/blog/4.png", "alt", "blog image"], [1, "main-blog-post"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "page-link"], [1, "icofont-rounded-left"], [1, "page-item"], ["href", "#", 1, "page-link"], ["aria-current", "page", 1, "page-item"], ["href", "#", 1, "page-link", "active"], [1, "col-lg-4", "main-service-area", "blog-side-bar"], [1, "service-sidebar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "icofont-search-1"], [1, "service-list"], [1, "tags"], [1, "discount-text"], [1, "theme-button"], ["href", "#", 1, "default-btn"], [1, "discount-shapes"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"]], template: function BlogRightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Blogs Right Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Blogs Right Sidebar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "How to clean your office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " Toilet Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " Stay Hygienic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " Cleaning Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " Cleaning Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " Wash Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Most Popular Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Enjoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Clean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Hygienic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXJpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5865:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 196, vars: 0, consts: [[1, "blog-title", "blog-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "blog-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "blog-post-top", "pt-100"], [1, "row", "pb-65", "align-items-center"], [1, "col-lg-4", "col-md-4"], [1, "col-lg-4", "col-md-4", "offset-lg-1"], [1, "search-bar"], [1, "input-group"], ["type", "text", "placeholder", "Search|", 1, "form-control"], [1, "icofont-search-1"], [1, "col-lg-3", "col-md-4"], [1, "categories", "text-end"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "icofont-caret-down"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "main-blog-post"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "blog-area"], [1, "blog-img"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/1.png", "alt", "blog image"], [1, "blog-text"], [1, "icofont-calendar"], [1, "icofont-ui-user"], ["href", "#"], ["routerLink", "/blog-details", 1, "blog-btn"], [1, "icofont-rounded-right"], ["src", "assets/img/blog/2.png", "alt", "blog image"], ["src", "assets/img/blog/3.png", "alt", "blog image"], ["src", "assets/img/blog/4.png", "alt", "blog image"], ["src", "assets/img/blog/5.png", "alt", "blog image"], ["src", "assets/img/blog/6.png", "alt", "blog image"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["routerLink", "/", "tabindex", "-1", "aria-disabled", "true", 1, "page-link"], [1, "icofont-rounded-left"], [1, "page-item"], ["routerLink", "/", 1, "page-link"], ["aria-current", "page", 1, "page-item"], ["routerLink", "/", 1, "page-link", "active"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Blogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Our Latest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Home Clinging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Office Clinging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Car Clinging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Store Clinging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "How to clean your office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Glass cleaning tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "How to clean your home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " 20 Feb 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8717:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 15, vars: 0, consts: [[1, "contact-title", "contact-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "contact-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "pt-100"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 7);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7753:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.??fac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 16, vars: 0, consts: [[1, "error-title"], [1, "d-table"], [1, "d-table-cell"], [1, "error-section", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "error-img"], ["src", "assets/img/404.png", "alt", "error image"], [1, "theme-button", "text-center"], ["routerLink", "/", 1, "default-btn"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "go to home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9538:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-one/home-one.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeOneComponent": () => (/* binding */ HomeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_application_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/application.service */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ 7618);










function HomeOneComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_ng_template_57_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16); const modal_r14 = restoredCtx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "The Bank shall, in addition to any right of set off or similar right prescribed by law, is entitled, without notice, to combine and consolidate all or any of my/our or Accounts with the Bank (without any liabilities to the Bank) and/or to set off or transfer any or all amounts owed by me/us or either of us or a related party to the Bank against any and all money which the Bank may hold for my/our account or any other credit be it cash, cheques, valuables deposits securities negotiable instruments or other assets belonging to me/us whether held on the current or deposit account or otherwise and whether in Naira or any other currency (hereinafter referred to as \"foreign currency\")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "The Bank shall be entitled to retain and not repay any amount whatsoever that it owed to me/us or which it holds on my/our behalf and until all amounts owed by me/us or the related party to the Bank have been repaid or discharged in full and, for so long as such amounts have not been discharged or repaid in full, the Bank shall be entitled to appropriate any amounts so owed to me/us or held on my/our behalf in or towards the repayment and discharge of the amounts owed by me/us or either of us or the related party to the Bank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "1. When effecting any set -off the Bank shall be entitled at its absolute discretion, with or without notice to us to convert any Naira or foreign currency into the currency in which the amount owed was incurred at the applicable official exchange rate for the currencies in question prevailing in Nigeria at the time of such conversion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "2. I/We shall be responsible for all costs, expenses and liabilities arising for the purchase, retention and sale of investments made on our behalf by the Bank which include but are not limited to all taxes, statutory fees, duties and levies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "3. The Bank is hereby authorized, in the absence of any written instruction to the contrary, to place my/our funds in any appropriate investment (which for the purpose of this clause shall include but not be limited to investments in Commercial Paper whether guaranteed by the Bank or Otherwise) or on deposit and to renew/reinvest at maturity any investments or deposit made in my/our names(s) on the same terms and conditions that applied to such investment/deposit immediately prior to its maturity or on such other terms and conditions as the Bank may, in its absolute discretion, consider appropriate under the circumstances.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "4. The Bank may, unless otherwise instructed by me/us, retain on my/our behalf, on a safe custody basis, any investment instruments issued in respect of an investment made on my/our behalf and unless otherwise specifically agreed. I/We will not have recourse to the Bank for the value or worth of such investments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "5. Where the Bank, in the absence of any previous agreement as to rate of interest and costs and charges that will apply if my/our accounts or any of them becomes overdrawn, in its absolute discretion allows us to make any drawing that results in my/our account(s) or any of them becoming overdrawn, the Bank shall be entitled to charge such rate of interest and impose such charges as, in its absolute discretion, it considers appropriate in the circumstances and I/We agree to pay such interest and charges to the Bank on demand.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "6. I/We agree that where I/We give any instruction for a payment(s) that in aggregate exceed(s) the amounts standing to the credit of my/our account(s) against which payment is to be made, the Bank reserves the right to decline to carry out such instruction or where there is more than one transaction, to select the transaction that shall be executed without reference to the date of dispatch or time or receipt of my/our instructions, if the Bank in its discretion makes any such payment for which our/my account is not funded we/I confirm our obligation to repay the Bank whether or not the Bank makes a demand, any outstanding sum in addition to charges and interest accrued thereon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "8. Where any un-cleared effects credited to my/our account(s) by the Bank are subsequently dishonored and /or the Bank for any reason is required to repay to the paying Banker or any other party all or any part of any amount credited to our account. The Bank will be entitled to debit my/our account(s) with the amount of such un-cleared effects and/or repaid amounts plus accrued interest and applicable bank charges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "9. No failure or delay in exercising any right power or privilege vested in the Bank by these conditions shall operate as a waiver thereof nor shall any partial exercise of such right, power or privilege preclude any other or further exercise thereof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "10. If any of the Conditions or the provisions specified herein are invalid, illegal or unenforceable in any respect under the law the validity, legality and enforceability of the remaining conditions and/or provisions contained herein shall not in any manner be affected or impaired thereby.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "11. Commission and charges shall be levied in accordance with the Bank's standard scale of charges in force from time to time and copies of which are available on request. The Bank reserves the right to amend its rates of interest in accordance with its standard scale of charges and/or conditions from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "12. Where these conditions are signed by or on behalf of more than one person as the Customer, all of such persons are bounds by these terms and conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "13. Any communication by the Bank shall be deemed to have been made as soon as it is sent to the most recent address provided by me/us and the date indicated on the duplicate copy of such letter or on the Bank's mailing list will constitute the date on which the communication was sent. Any statement or confirmation of any transaction between me/us or either of us and Bank shall be deemed to have been examined by me/us and to be conclusive and binding unless within 10 workings day from the date specified on such statement/confirmation, I/We or either of us advise the Bank in writing that an item contained therein is being disputed, whether or not such item was made in accordance with the mandate from time to time given by me/us to the Bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "14. I/We understand and acknowledge that electronic mail, facsimile and verbal communications are insecure transmission media where I/We advise the Bank to accept the instruction in such manner, I/We however undertake to indemnify the Bank in full for any loss it may suffer or incur by reason of its honoring my/our Letters, electronic mail, facsimile or verbal instructions, irrespective of whether same are erroneous. Fraudulent or issued otherwise than in accordance with the mandate for my/our accounts(s) any and all payment instructions issued in accordance with the mandate for my/our account(s) and which bears or purports to bear the facsimile or electronic mail signature of the person(s) whose specimens signatures have been provided to the Bank by me/us. The Bank is hereby authorized to honor and to debit my/our account, for any and all payment instructions/confirmations issued or provided by me/us using a pre-agreed format for same which may include but is not limited to oral or written Instructions/confirmations and where given orally such oral instruction may if previously agreed involves the use of specific password(s) and when in writing may be given by letter, facsimile or electronic mail.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "15. I/We hereby authorize the Bank to debit my/our account with the cost incurred in respect of the issuance of the cheque book(s) for the above account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "16. Honour all cheques or other orders/instruments which may be drawn on the said account provided such cheques or orders/instruments are signed by me/us and to debit such cheques or orders/instrument s to the said account whether such account be for the time being in credit or overdrawn in consequences of such debit without prejudice to your right to refuse to allow any overdraft or increase of overdraft and in consideration, I/We agree: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "a. To assume full responsibility for the genuineness or correctness and validity of all endorsements appearing on all cheques, orders, bills, notes, negotiable instruments, receipts and/or other documents deposited in my/our account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "b. To be responsible for any repayment of any overdraft with interest and to comply with the Bank's rules and new rates as advised by the Bank from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "c. To free the Bank from any responsibility for any loss or damage of funds deposited with the Bank due to any future government order, law, tax, embargo, moratorium, exchange restriction and/or all other causes beyond the Bank's control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "d. That all funds standing to my/our credit are payable on demand only on such local currency as may be in circulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "e. To be bound by any notification of change in the conditions governing the account directed to my/our last known address and any notice or letter sent to my/our last known address shall be considered as duly delivered and received by me/us at the time it would be delivered in the ordinary course of post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "f. Customers should not write out cheques in staff's name. All cheques for deposits should be made out in customer's name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "g. Customers should desist from transferring money from their accounts into staff's accounts. Impromptu cash pickups at the customer's premises by staff should not exceed N500,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "h. Customers who wish to enjoy cash pick up services should makes a formal request which would be handled in accordance with the laid down procedure for cash pick up. Cash in excess of N500, 000 should be paid over the counter by the customer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "i. That if a cheque credited to my/our individual account is returned dishonored, the same may be transmitted to me/us through my/our last known address either by bearer or by post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "j. And I/we note that the Bank will accept no liability whatsoever for funds handed to members of the staff outside banking hours or outside hours or outside the bank's premises. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "k. That my/our attention has also drawn to the necessity of safe guarding my/our passwords and access codes to the bank's non-branch channels including, but not limited to ATM, Internet Banking, Telephone Banking, Mobile Banking and SMS Banking, so that unauthorized persons are unable to gain access to it and to the fact that neglect of this precaution may be a ground for any consequential loss being charged to my/our account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "l. That any Bank is under no obligation to honour any cheques(s) drawn on the account unless there are sufficient fund in the account to cover the value of the said cheque(s) and I/we understand and agree that any such cheque(s) may be returned to me/us unpaid, but if paid, we are obliged to repay the bank on demand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "m. That any disagreements with entries on my/our bank statements will be made by me/us within 15 workings days of the dispatched of the bank statements. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Failing receipt by the Bank of a notice of disagreement of the entries within 15days from the date of dispatch of my/our Bank statements as rendered is correct. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "n. That any sum standing to the debit of the current account shall be liable to interest charges at the rate fixed by the bank from time to time. The bank is authorized to debit from the account the usual banking charges, interest commission, and any service charge set by Management from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Electronic Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "We confirm and agree that the following terms and conditions shall govern my/our Electronic Banking transactions with the Bank. The following terms and conditions shall govern the Bank's e-Banking Services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "div", 93);
} }
function HomeOneComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function HomeOneComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function HomeOneComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
const _c0 = function (a0) { return { display: a0 }; };
class HomeOneComponent {
    constructor(aps, router, modalService) {
        this.aps = aps;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        //public showOverlay = true;
        this.obj = { FirstName: "", MiddleName: "", LastName: "", Email: "", DateOfBirth: "", Gender: 0, Address: "", PhoneNumber: "", ProductCode2: "100" };
        this.AccountNumber = "";
        this.CustomerID = "";
        this.FullName = "";
        this.btn = "Submit Application";
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.loading = "block";
        this.error = "none";
        this.acctType = "";
        this.showOverlay = false;
        this.captcha = "";
        this.email = "uthman4u2nv@yahoo.com";
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                //Validators.minLength(8),
                //Validators.maxLength(20)
            ])
        });
    }
    onReset() {
        this.formGroup.reset();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    resolved(captchaResponse) {
        this.captcha = captchaResponse;
        console.log('Resolved captcha with response: ' + this.captcha);
    }
    confirmdetails() {
        var form = document.getElementsByClassName('needs-validation')[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        this.form = "none";
        this.msg = "none";
        this.confirm = "block";
        this.error = "none";
    }
    NewApplication() {
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.error = "none";
        this.router.navigate(['']);
    }
    editApplication() {
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.error = "none";
    }
    SubmitApplication(data) {
        this.showOverlay = true;
        this.aps.SubmitApplication(data).subscribe(d => {
            if (d.AccountNumber !== null) {
                this.AccountNumber = d.AccountNumber;
                this.CustomerID = d.CustomerID;
                this.FullName = d.FullName;
                this.obj = { FirstName: "", MiddleName: "", LastName: "", Email: "", DateOfBirth: "", Gender: 0, Address: "", PhoneNumber: "", ProductCode2: "0" };
                this.form = "none";
                this.msg = "block";
                this.confirm = "none";
            }
            else {
                this.form = "none";
                this.msg = "none";
                this.confirm = "none";
                this.error = "block";
            }
            this.showOverlay = false;
        });
    }
}
HomeOneComponent.??fac = function HomeOneComponent_Factory(t) { return new (t || HomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_application_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
HomeOneComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HomeOneComponent, selectors: [["app-home-one"]], inputs: { obj: "obj" }, decls: 265, vars: 48, consts: [[1, "why-choose-section", "why-choose-bg"], [1, "container"], [1, "row"], [1, "col-lg-6", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "background-color", "white", "padding", "20px", "margin-bottom", "-10px"], [1, "responsive", 2, "padding", "30px"], [1, "col", "text-center"], [2, "color", "darkblue"], [2, "margin-top", "40px"], [1, "col-lg-6", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "padding-left", "20px", "padding-right", "20px"], [1, "card", 2, "border", "0px"], [1, "card-body"], [1, "alert", "alert-success", 3, "ngStyle"], [1, "list-group-item"], [1, "btn", "btn-primary", "btn-large", 3, "click"], [1, "alert", "alert-danger", 3, "ngStyle"], [1, "loading", 2, "display", "block", 3, "ngStyle"], ["content", ""], ["class", "my-overlay", 4, "ngIf"], [3, "ngStyle"], [2, "color", "#383e7e"], [4, "ngIf"], [1, "btn", "btn-warning", "btn-large", 3, "click"], [1, "md-form"], [1, "needs-validation"], ["accountopeningform", "ngForm"], [1, "responsive", 3, "ngStyle"], [1, "col-md-6"], [1, "form-group"], [1, "input-group-addon", "text-color"], ["type", "text", "required", "", "id", "LastName", "name", "LastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "name", "FirstName", "required", "", "id", "FirstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["type", "text", "name", "MiddleName", "id", "MiddleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["MiddleName", ""], ["type", "date", "name", "DateOfBirth", "id", "DateOfBirth", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["DateOfBirth", "ngModel"], ["name", "Gender", "id", "Gender", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Gender", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], ["type", "text", "name", "PhoneNumber", "required", "", "id", "PhoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PhoneNumber", "ngModel"], [1, "col-md-12"], ["type", "email", "name", "Email", "id", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Email", "ngModel"], ["required", "", "name", "Address", "required", "", "id", "Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Address", "ngModel"], ["name", "type", "id", "ProductCode2", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "100"], ["value", "101"], ["value", "102"], ["value", "103"], ["value", "104"], ["value", "105"], ["value", "106"], ["value", "107"], ["value", "108"], ["value", "302"], ["value", "200"], ["value", "201"], ["value", "202"], ["value", "203"], ["value", "204"], ["value", "205"], ["value", "206"], ["value", "400"], ["value", "401"], ["value", "402"], ["value", "403"], ["value", "404"], ["value", "405"], ["value", "406"], ["value", "407"], ["value", "408"], ["value", "409"], ["value", "410"], ["value", "411"], [1, "row", 2, "margin-top", "20px"], [3, "hidden"], [1, "input-group-addon"], ["siteKey", "6Le4bRweAAAAAA3s4_O_38uTdk9xHPUDjxurz1tU", 3, "resolved"], [1, "col-lg-12"], [1, "text-color"], ["href", "#", 3, "click"], [1, "btn", "btn-primary", "btn-large", 3, "disabled", "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function HomeOneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Go beyond the ordinary and step into a new world where you enjoy flexibility,control and best inclass services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Some of the benefits of opening account with Baines Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "* Different account types specially suited for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "* Attractive interest rates (based on account type).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "* Your funds are fully insured by NDIC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "* Enjoy flexibility and control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Account Opened Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_button_click_42_listener() { return ctx.NewApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Account cannot be opened");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Please kindly send us a mail at info@bainescredit.com if the issue persists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_button_click_52_listener() { return ctx.NewApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](57, HomeOneComponent_ng_template_57_Template, 80, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](59, HomeOneComponent_div_59_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "CONFIRM DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](76, HomeOneComponent_span_76_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](77, HomeOneComponent_span_77_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_button_click_91_listener() { return ctx.editApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Edit Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_button_click_94_listener() { return ctx.SubmitApplication(ctx.obj); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "form", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "INSTANT ACCOUNT OPENING FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_108_listener($event) { return ctx.obj.LastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, " Last Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_116_listener($event) { return ctx.obj.FirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, " First Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_125_listener($event) { return ctx.obj.MiddleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_131_listener($event) { return ctx.obj.DateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, " Date of Birth is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "select", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_select_ngModelChange_140_listener($event) { return ctx.obj.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "--Gender--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, " Gender is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_154_listener($event) { return ctx.obj.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, " Phone is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_input_ngModelChange_163_listener($event) { return ctx.obj.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, " Email is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "textarea", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_textarea_ngModelChange_172_listener($event) { return ctx.obj.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, " Address is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "Type of Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeOneComponent_Template_select_ngModelChange_180_listener($event) { return ctx.obj.ProductCode2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "Select Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "Easy Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "Kiddies Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Mandatory Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Salary Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "Micro Credit-Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "Staff Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "Micro Credit-Mandatory Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "Quick Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "Treasury Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "----All Current Account----");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "Current Individual Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Quick Current Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Corporate Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "Salary Current Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Asset Current Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "Staff Current Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Quick Cash Current Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "----All Loan Account----");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "Rebiz Individual Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "Rebiz Corporate Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Term Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Assets Financing Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Contract Financing Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "Quick Loan Uniform Officers Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Micro Credit Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Staff Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Quick Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240, "Salad Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "Quick Cash Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Business Term Loan Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](246, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "Proof you are human");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "re-captcha", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resolved", function HomeOneComponent_Template_re_captcha_resolved_253_listener($event) { return ctx.resolved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "By clicking on Confirm Details button below you agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_a_click_259_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](58); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, " Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, " of Baines Credit Microfinance Bank Online Account Opening ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeOneComponent_Template_button_click_263_listener() { return ctx.confirmdetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Confirm Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](98);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](109);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](117);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](132);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](141);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](155);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](164);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](38, _c0, ctx.msg));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Account Number: ", ctx.AccountNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Customer ID: ", ctx.CustomerID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Account Name: ", ctx.FullName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](40, _c0, ctx.error));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](42, _c0, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.showOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](44, _c0, ctx.confirm));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Last Name: ", ctx.obj.LastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("First Name: ", ctx.obj.FirstName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("middle Name: ", ctx.obj.MiddleName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.obj.Gender == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.obj.Gender == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Date of Birth: ", ctx.obj.DateOfBirth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Address: ", ctx.obj.Address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Email: ", ctx.obj.Email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Account Type: ", ctx.obj.ProductCode2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.btn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](46, _c0, ctx.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r6.valid || _r6.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r7.valid || _r7.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.MiddleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.DateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r9.valid || _r9.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.Gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r10.valid || _r10.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.PhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r11.valid || _r11.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r12.valid || _r12.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r13.valid || _r13.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.ProductCode2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.captcha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", !ctx.captcha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !_r5.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__.FormGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgSelectMultipleOption"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__.RecaptchaComponent], styles: [".styled-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 25px 0;\n  font-size: 0.9em;\n  font-family: sans-serif;\n  min-width: 400px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n}\n\n.loading[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  z-index: -1;\n}\n\n.my-overlay[_ngcontent-%COMP%] {\n  left: 0 !important;\n  top: 0 !important;\n  z-index: 10000 !important;\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  background-color: rgba(0, 0, 0, 0.9) !important;\n  cursor: pointer !important;\n  visibility: visible !important;\n  transition: visibility 0s, opacity 0.4s linear !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: wait !important;\n}\n\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\n  font-size: 100px !important;\n}\n\n.text-color[_ngcontent-%COMP%] {\n  color: #383e7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUoiLCJmaWxlIjoiaG9tZS1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVkLXRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC44cyBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm15LW92ZXJsYXkge1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSkgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1vdmVybGF5IGkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWNvbG9ye1xyXG4gICAgY29sb3I6ICMzODNlN2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6376:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/home-three/home-three.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThreeComponent": () => (/* binding */ HomeThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class HomeThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeThreeComponent.??fac = function HomeThreeComponent_Factory(t) { return new (t || HomeThreeComponent)(); };
HomeThreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeThreeComponent, selectors: [["app-home-three"]], decls: 778, vars: 0, consts: [[1, "home-style-three", "home-bg-three"], [1, "d-table"], [1, "d-table-cell"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-7", "offset-lg-1"], [1, "home-text-three"], [1, "theme-button"], ["routerLink", "/testimonial", 1, "default-btn", "active-btn"], ["routerLink", "/service", 1, "default-btn"], [1, "col-lg-4", "col-md-5", "p-0"], [1, "home-image"], ["src", "assets/img/home/8.png", "alt", "home image"], [1, "home-three-shapes"], ["src", "assets/img/process-pattern-3.png", "alt", "shape"], ["src", "assets/img/process-pattern-4.png", "alt", "shape"], ["src", "assets/img/process-pattern-5.png", "alt", "shape"], ["src", "assets/img/process-pattern-6.png", "alt", "shape"], ["src", "assets/img/process-pattern-7.png", "alt", "shape"], [1, "about-style-two", "pt-100"], [1, "container"], [1, "col-lg-6", "col-md-12"], [1, "about-image"], ["src", "assets/img/about.png", "alt", "about image"], [1, "counter-section"], [1, "counter-area"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-6", "offset-lg-2", "col-xl-5", "offset-xl-1"], [1, "counter-text"], [1, "counter"], [1, "col-lg-4", "col-md-6", "col-6", "col-xl-5"], [1, "col-lg-6", "col-md-12", "pl-35"], [1, "section-head"], [1, "about-text"], [1, "icofont-check-circled"], ["routerLink", "/pricing", 1, "default-btn", "active-btn"], ["routerLink", "/about", 1, "default-btn"], [1, "service-style-three", "pt-100", "pb-70"], [1, "section-head", "text-center"], [1, "service-slider", "owl-carousel", "owl-theme"], [1, "service-item"], [1, "flaticon-cleaning-spray"], ["routerLink", "/service-details", 1, "default-btn"], [1, "service-shape"], ["src", "assets/img/service/shapes/service-pattern-6.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-7.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-8.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-9.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-10.png", "alt", "shape"], [1, "flaticon-clean-house"], [1, "flaticon-wiper"], [1, "why-us"], [1, "col-lg-6", "p-0"], [1, "why-us-img"], [1, "col-lg-6"], [1, "why-us-text", "ptb-100"], [1, "media", "d-flex"], [1, "icofont-check", "align-self-start", "mr-3"], [1, "media-body"], [1, "mt-0"], [1, "mb-0"], [1, "process-section", "process-style-three", "pb-70"], [1, "col-md-4", "col-sm-6"], [1, "process-card"], [1, "icofont-touch"], ["src", "assets/img/process-pattern-2.png", "alt", "arrow"], [1, "icofont-world"], [1, "col-md-4", "col-sm-6", "offset-sm-3", "offset-md-0"], [1, "icofont-recycle-alt"], [1, "process-shapes"], [1, "recent-project-section", "pt-100", "pb-70"], [1, "container-fluid", "p-0"], [1, "recent-project-slider", "owl-carousel", "owl-theme"], [1, "recent-project-item"], [1, "project-img"], ["src", "assets/img/recent-work/6.png", "alt", "image"], [1, "recent-hover"], ["href", "assets/img/recent-work/6.png", 1, "popup-gallery"], [1, "icofont-eye-alt"], [1, "project-text"], ["routerLink", "/"], ["src", "assets/img/recent-work/7.png", "alt", "image"], ["href", "assets/img/recent-work/7.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/9.png", "alt", "image"], ["href", "assets/img/recent-work/9.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/10.png", "alt", "image"], ["href", "assets/img/recent-work/10.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/8.png", "alt", "image"], ["href", "assets/img/recent-work/8.png", 1, "popup-gallery"], [1, "pricing-section", "pb-70"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "price-card-area"], [1, "price-head-text"], [1, "plan-features"], [1, "plan-btn"], [1, "price-card-area", "active-price"], [1, "col-lg-4", "col-md-6", "offset-md-3", "col-sm-6", "offset-lg-0", "offset-sm-3"], [1, "team-section", "pb-70"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "team-card"], [1, "team-img"], ["src", "assets/img/team/1.png", "alt", "team member"], [1, "team-social"], ["href", "#", "target", "_blank"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-linkedin"], [1, "icofont-instagram"], [1, "team-text"], ["src", "assets/img/team/2.png", "alt", "team member"], ["src", "assets/img/team/3.png", "alt", "team member"], ["src", "assets/img/team/4.png", "alt", "team member"], [1, "testimonial-section", "testimonial-bg", "ptb-100"], [1, "testimonial-area"], [1, "testimonial-slider", "owl-carousel", "owl-theme", "text-center"], [1, "sin-testiText"], [1, "blog-section", "pt-100"], [1, "blog-slider", "owl-carousel", "owl-theme"], [1, "blog-area"], [1, "blog-img"], ["routerLink", "/blog-details", 1, "d-block"], ["src", "assets/img/blog/1.png", "alt", "blog image"], [1, "blog-text"], ["routerLink", "/blog-details"], [1, "icofont-calendar"], [1, "icofont-ui-user"], ["routerLink", "/blog-details", 1, "blog-btn"], [1, "icofont-rounded-right"], ["src", "assets/img/blog/2.png", "alt", "blog image"], ["src", "assets/img/blog/3.png", "alt", "blog image"]], template: function HomeThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Top Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " in Your Area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Get A Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Job Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Experts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "We have been doing projects since 2008.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "It is a long fact that a reader will be distracted by the readable content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal within the distribution of letters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " 100% Secured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " 24/7 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Well Disciplined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Online Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Viscous Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Professional Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Office Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Professional Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Office Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "section", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Why Chooes Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "People Trust on Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Experts Cleaners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](218, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Latest Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Clean & Fast Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Budget Oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "How Do We Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Choose Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Booking Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Enjoy Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](272, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Our Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Our Recent Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "Hotel Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Glass Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](318, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](337, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "Housing Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](346, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "Resort Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "Apartment Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "section", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Basic Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](398, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, " 5 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](401, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, " 1 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](404, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](407, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "Standard Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](425, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](428, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, " 7 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](431, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, " 2 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](434, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](437, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Premium Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "159");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](455, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](458, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, " 10 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](461, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, " 3 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](464, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](467, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "section", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](485, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](490, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](492, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](494, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Head of Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](503, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](506, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](508, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](510, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](512, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "Marry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](521, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](528, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](530, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](539, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](542, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](544, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](546, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](548, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "Eve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Stepheny Mc.man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Co-worker of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](564, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "Jackson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Graphics Designer of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "Amelia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "Web Developer of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "section", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, "Latest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](592, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](599, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](602, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](606, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](609, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](611, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](613, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](620, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](623, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](625, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](629, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](630, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](634, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](641, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](643, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](644, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](648, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](650, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](651, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](654, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](655, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](656, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](662, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](665, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](666, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](667, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](669, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](672, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](676, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](679, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](680, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](682, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](683, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](684, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](685, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](686, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](687, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](688, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](690, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](692, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](693, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](696, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](697, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](699, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](701, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](704, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](707, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](708, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](709, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](711, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](713, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](714, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](715, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](717, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](718, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](722, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](723, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](724, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](725, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](726, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](727, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](728, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](730, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](731, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](732, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](733, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](734, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](735, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](737, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](738, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](739, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](741, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](743, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](745, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](746, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](747, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](748, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](749, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](750, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](751, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](752, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](753, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](754, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](755, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](756, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](757, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](759, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](760, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](762, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](763, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](764, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](765, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](766, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](767, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](768, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](769, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](770, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](771, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](772, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](773, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](774, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](776, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](777, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2872:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-two/home-two.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwoComponent": () => (/* binding */ HomeTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




class HomeTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeTwoComponent.??fac = function HomeTwoComponent_Factory(t) { return new (t || HomeTwoComponent)(); };
HomeTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeTwoComponent, selectors: [["app-home-two"]], decls: 812, vars: 0, consts: [[1, "home-style-two", "home-bg"], [1, "container"], [1, "home-text-two"], [1, "request-call"], ["placeholder", "Your Number", 1, "form-control"], ["type", "submit"], [1, "home-image"], ["src", "assets/img/home/5.png", "alt", "home image"], ["src", "assets/img/home/6.png", "alt", "home-image"], [1, "home-shape"], ["src", "assets/img/service/shapes/1.png", "alt", "shape"], ["src", "assets/img/service/shapes/2.png", "alt", "shape"], ["src", "assets/img/service/shapes/3.png", "alt", "shape"], ["src", "assets/img/service/shapes/4.png", "alt", "shape"], ["src", "assets/img/service/shapes/5.png", "alt", "shape"], ["src", "assets/img/service/shapes/6.png", "alt", "shape"], ["src", "assets/img/service/shapes/7.png", "alt", "shape"], ["src", "assets/img/service/shapes/8.png", "alt", "shape"], ["src", "assets/img/service/shapes/9.png", "alt", "shape"], ["src", "assets/img/service/shapes/10.png", "alt", "shape"], [1, "info-section"], [1, "info-area"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "info-text"], [1, "icofont-wall-clock"], [1, "icofont-location-pin"], [1, "icofont-phone"], [1, "icofont-ui-message"], [1, "service-style-two", "pt-100"], [1, "section-head", "text-center"], [1, "service-slider-wrapper", "owl-carousel", "owl-theme"], [1, "row", "align-items-center", "bg-white"], [1, "col-lg-6"], [1, "service-img"], ["src", "assets/img/service/1.png", "alt", "service image"], [1, "service-text-two"], [1, "icofont-check-circled"], [1, "theme-button"], ["routerLink", "/service", 1, "default-btn"], ["src", "assets/img/service/3.png", "alt", "service image"], [1, "hire-section"], [1, "container-fluid"], [1, "hire-text", "ptb-100"], [1, "section-head", "blue-title"], [1, "col-lg-5", "col-md-5", "col-sm-6", "p-0", "mr-20"], [1, "col-lg-6", "col-md-6", "col-sm-6", "p-0"], ["routerLink", "/contact", 1, "default-btn"], [1, "col-lg-6", "pr-0"], [1, "hire-img"], [1, "discount-text"], ["routerLink", "/pricing", 1, "default-btn"], [1, "discount-shape"], ["src", "assets/img/hire/shape-1.png", "alt", "shape"], ["src", "assets/img/hire/shape-2.png", "alt", "shape"], ["src", "assets/img/hire/shape-3.png", "alt", "shape"], ["src", "assets/img/hire/shape-4.png", "alt", "shape"], [1, "process-section", "process-style-two", "pb-70"], [1, "section-head", "blue-title", "text-center"], [1, "col-md-4", "col-sm-6"], [1, "process-card"], [1, "icofont-touch"], ["src", "assets/img/process-pattern-2.png", "alt", "arrow"], [1, "icofont-world"], [1, "col-md-4", "col-sm-6", "offset-sm-3", "offset-md-0"], [1, "icofont-recycle-alt"], [1, "counter-style-two", "pt-100", "pb-70"], [1, "text-center"], [1, "col-md-3", "col-5"], [1, "counter-text"], [1, "counter"], [1, "col-md-3", "col-7"], [1, "counter-shape"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"], [1, "recent-work-section", "pt-100"], [1, "container-fluid", "p-0"], [1, "recent-work-slider", "owl-carousel", "owl-theme"], [1, "recent-items"], [1, "recent-img"], ["src", "assets/img/recent-work/1.png", "alt", "project image"], [1, "recent-hover"], [1, "d-table"], [1, "d-table-cell"], ["href", "assets/img/recent-work/1.png", 1, "popup-gallery", "d-block"], [1, "icofont-eye-alt"], ["src", "assets/img/recent-work/2.png", "alt", "project image"], ["href", "assets/img/recent-work/2.png", 1, "popup-gallery", "d-block"], ["src", "assets/img/recent-work/3.png", "alt", "project image"], ["href", "assets/img/recent-work/3.png", 1, "popup-gallery", "d-block"], ["src", "assets/img/recent-work/4.png", "alt", "project image"], ["href", "assets/img/recent-work/4.png", 1, "popup-gallery", "d-block"], ["src", "assets/img/recent-work/5.png", "alt", "project image"], ["href", "assets/img/recent-work/5.png", 1, "popup-gallery", "d-block"], [1, "pricing-section", "pb-70"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "price-card-area"], [1, "price-head-text"], [1, "plan-features"], [1, "plan-btn"], ["routerLink", "/"], [1, "price-card-area", "active-price"], [1, "col-lg-4", "col-md-6", "offset-md-3", "col-sm-6", "offset-lg-0", "offset-sm-3"], [1, "team-section", "pb-70"], [1, "team-card"], [1, "team-img"], ["src", "assets/img/team/1.png", "alt", "team member"], [1, "team-social"], ["href", "#", "target", "_blank"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-linkedin"], [1, "icofont-instagram"], [1, "team-text"], ["src", "assets/img/team/2.png", "alt", "team member"], ["src", "assets/img/team/3.png", "alt", "team member"], ["src", "assets/img/team/4.png", "alt", "team member"], [1, "testimonial-section", "testimonial-bg", "ptb-100"], [1, "testimonial-area"], [1, "testimonial-slider", "owl-carousel", "owl-theme", "text-center"], [1, "sin-testiText"], [1, "blog-section", "pt-100"], [1, "blog-slider", "owl-carousel", "owl-theme"], [1, "blog-area"], [1, "blog-img"], ["routerLink", "/blog-details", 1, "d-block"], ["src", "assets/img/blog/1.png", "alt", "blog image"], [1, "blog-text"], ["routerLink", "/blog-details"], [1, "icofont-calendar"], [1, "icofont-ui-user"], ["routerLink", "/blog-details", 1, "blog-btn"], [1, "icofont-rounded-right"], ["src", "assets/img/blog/2.png", "alt", "blog image"], ["src", "assets/img/blog/3.png", "alt", "blog image"]], template: function HomeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Stay Neat & Clean Stay Healthy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Request Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "We Are Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sun - Thu : 10:00AM - 06:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "28/A Street, New York City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Call Emergency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "+88 0123 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Message Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "hello@kiaz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Viscous Provided ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Kitchen Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Balcony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Floor Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Bathroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " Window Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "More Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " Kitchen Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " Balcony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Floor Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " Bathroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " Window Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "More Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Why Should ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Hire Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " 100% Secured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " Well Disciplined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " Budget Oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " Eco Friendly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Top Rated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " Fast & Clean Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " 24/7 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " Online Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " 100% Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " Clean Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Get A Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " for Our New Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Get A Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "How Do We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Choose Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Booking Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Enjoy Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "h2", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Our Track ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Job Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Experts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](268, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](272, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "section", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Recently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "We Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](288, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](293, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](312, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](317, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](333, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](336, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](341, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](344, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](352, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](357, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](368, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](384, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](389, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](392, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](405, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "section", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "Basic Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](432, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, " 5 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](435, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, " 1 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](438, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](441, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Standard Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](459, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](462, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, " 7 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](465, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, " 2 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](468, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](471, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, "Premium Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "159");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](489, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, " Fully Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](492, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, " 10 Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](495, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, " 3 time in a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](498, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, " Full Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](501, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, " All Our Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "section", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](519, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](522, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](528, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](531, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "Head of Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](537, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](540, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](542, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](544, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](546, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](549, "Marry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](555, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](558, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](560, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](562, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](564, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](573, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](576, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](578, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](580, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](582, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "Eve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](594, "Stepheny Mc.man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, "Co-worker of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, "Jackson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](603, "Graphics Designer of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "Amelia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](610, "Web Developer of 3S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](611, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](612, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "section", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, "Latest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](619, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](626, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](630, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](633, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](636, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](640, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](643, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](646, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](647, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](651, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](654, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](655, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](656, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](657, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](661, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](664, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](666, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](668, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](671, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](672, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](675, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](678, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](679, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](680, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](682, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](684, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](685, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](687, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](689, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](690, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](692, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](693, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](696, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](697, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](699, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](701, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](703, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](706, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](707, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](708, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](710, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](711, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](714, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](715, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](717, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](718, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](720, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](722, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](723, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](724, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](726, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](727, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](730, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](731, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](733, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](734, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](735, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](737, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](738, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](739, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](741, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](743, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](745, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](746, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](747, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](748, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](749, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](750, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](751, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](752, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](753, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](754, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](755, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](756, "How to cleanroom yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](757, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](759, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](760, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](762, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](763, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](764, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](765, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](766, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](767, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](768, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](769, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](770, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](771, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](772, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](773, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](774, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](776, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](777, "Enjoy the working time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](778, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](779, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](780, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](781, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](782, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](783, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](784, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](785, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](786, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](787, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](788, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](789, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](790, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](791, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](792, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](793, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](794, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](795, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](796, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](797, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](798, "Self cleaning is the best drill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](799, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](800, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](801, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](802, " 20 Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](803, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](804, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](805, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](806, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](807, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](808, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](809, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](810, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](811, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3005:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pricing/pricing.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.??fac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 112, vars: 0, consts: [[1, "pricing-title", "bg-1"], [1, "d-table"], [1, "d-table-cell"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "pricing-section", "pt-100", "pb-70"], [1, "container"], [1, "section-head", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "price-card-area"], [1, "price-head-text"], [1, "plan-features"], [1, "icofont-check-circled"], [1, "plan-btn"], [1, "price-card-area", "active-price"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Best Prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Prices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Basic Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Full Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " All Our Equipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " 5 Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " 1 time in a week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Fully Satisfaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Standard Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Full Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " All Our Equipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " 7 Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " 1 time in a week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Fully Satisfaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Premium Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "159");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Full Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " All Our Equipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " 5 Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " 1 time in a week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Fully Satisfaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 661:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/recent-project/recent-project.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentProjectComponent": () => (/* binding */ RecentProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class RecentProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecentProjectComponent.??fac = function RecentProjectComponent_Factory(t) { return new (t || RecentProjectComponent)(); };
RecentProjectComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RecentProjectComponent, selectors: [["app-recent-project"]], decls: 104, vars: 0, consts: [[1, "service-title", "service-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "service-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "recent-style-two", "pt-100", "pb-70"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "recent-items"], [1, "recent-img"], ["src", "assets/img/recent-work/1.png", "alt", "project image"], [1, "recent-hover"], ["href", "assets/img/recent-work/1.png", 1, "popup-gallery"], [1, "icofont-eye-alt"], ["src", "assets/img/recent-work/2.png", "alt", "project image"], ["href", "assets/img/recent-work/2.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/3.png", "alt", "project image"], ["href", "assets/img/recent-work/3.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/4.png", "alt", "project image"], ["href", "assets/img/recent-work/4.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/5.png", "alt", "project image"], ["href", "assets/img/recent-work/5.png", 1, "popup-gallery"], ["src", "assets/img/recent-work/11.png", "alt", "project image"], ["href", "assets/img/recent-work/11.png", 1, "popup-gallery"], [1, "process-section", "process-style-two", "process-style-four", "pb-70"], [1, "section-head", "blue-title", "text-center"], [1, "col-md-4"], [1, "process-card"], [1, "icofont-touch"], ["src", "assets/img/process-pattern-2.png", "alt", "arrow"], [1, "icofont-world"], [1, "icofont-recycle-alt"]], template: function RecentProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Recent Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Recent Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "How Do We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Choose Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Booking Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Enjoy Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Lorem Ipsum is simply dummied text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlbnQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1365:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/service-details/service-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceDetailsComponent": () => (/* binding */ ServiceDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class ServiceDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceDetailsComponent.??fac = function ServiceDetailsComponent_Factory(t) { return new (t || ServiceDetailsComponent)(); };
ServiceDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServiceDetailsComponent, selectors: [["app-service-details"]], decls: 124, vars: 0, consts: [[1, "service-title", "service-title-bg", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "service-title-text"], ["routerLink", "/index"], [1, "icofont-rounded-double-right"], ["routerLink", "/service"], [1, "service-details-area", "main-service-area", "pt-100", "services-details-page"], [1, "row"], [1, "col-lg-8"], ["src", "assets/img/service/4.png", "alt", "service"], [1, "service-details-post"], [1, "icofont-check-circled"], [1, "theme-button"], ["routerLink", "/pricing", 1, "default-btn"], [1, "page-button"], [1, "col-md-3", "col-sm-6"], ["routerLink", "/", 1, "default-btn"], [1, "icofont-rounded-left"], [1, "col-md-3", "col-sm-6", "offset-md-6"], [1, "icofont-rounded-right"], [1, "col-lg-4", "main-service-area", "blog-side-bar"], [1, "service-sidebar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "icofont-search-1"], [1, "service-list"], ["routerLink", "/"], [1, "discount-text"], [1, "discount-shapes"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"]], template: function ServiceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Service Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Service Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "House Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " $29 Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Kitchen Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Floor cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Balcony ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Window Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Bathroom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Door Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Toilet Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Stay Hygienic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Cleaning Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Cleaning Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Wash Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3270:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/service-three/service-three.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceThreeComponent": () => (/* binding */ ServiceThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class ServiceThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceThreeComponent.??fac = function ServiceThreeComponent_Factory(t) { return new (t || ServiceThreeComponent)(); };
ServiceThreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServiceThreeComponent, selectors: [["app-service-three"]], decls: 169, vars: 0, consts: [[1, "service-title", "service-title-bg", "bg-2"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "service-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "main-service-area", "pt-100"], [1, "row"], [1, "col-lg-4", "main-service-area", "blog-side-bar"], [1, "service-sidebar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "icofont-search-1"], [1, "service-list"], ["href", "#"], [1, "icofont-rounded-right"], [1, "discount-text"], [1, "theme-button"], ["href", "#", 1, "default-btn"], [1, "discount-shapes"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"], [1, "col-lg-8"], [1, "col-md-6"], [1, "service-item"], [1, "flaticon-award"], ["routerLink", "/service-details", 1, "default-btn"], [1, "service-shape"], ["src", "assets/img/service/shapes/service-pattern-6.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-7.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-8.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-9.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-10.png", "alt", "shape"], [1, "flaticon-credit-card"], [1, "flaticon-clean-house"], [1, "flaticon-cleaning-spray"], [1, "flaticon-wiper"]], template: function ServiceThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Services Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Services Three ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Toilet Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Stay Hygienic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Cleaning Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Cleaning Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Wash Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Top-Rated Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Fastest Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Professional Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Office Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Low Cost Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 617:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/service-two/service-two.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTwoComponent": () => (/* binding */ ServiceTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class ServiceTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceTwoComponent.??fac = function ServiceTwoComponent_Factory(t) { return new (t || ServiceTwoComponent)(); };
ServiceTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServiceTwoComponent, selectors: [["app-service-two"]], decls: 84, vars: 0, consts: [[1, "service-title", "service-title-bg", "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "service-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "service-section", "pt-100", "pb-70"], [1, "section-head", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "service-card"], [1, "flaticon-award"], [1, "theme-button"], ["routerLink", "/service-details", 1, "default-btn"], [1, "service-card", "active-service"], [1, "flaticon-credit-card"], [1, "flaticon-clock"], [1, "flaticon-cleaning-spray"], [1, "flaticon-clean-house"], [1, "flaticon-wiper"]], template: function ServiceTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Services Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Services Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Viscous Provided ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Top Rated Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Low Cost Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Fastest Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Professional Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Office Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3595:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/service/service.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceComponent": () => (/* binding */ ServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);




class ServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceComponent.??fac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 169, vars: 0, consts: [[1, "service-title", "service-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "service-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "main-service-area", "single-service-page", "pt-100"], [1, "row"], [1, "col-lg-8"], [1, "col-md-6"], [1, "service-item"], [1, "flaticon-award"], [1, "theme-button"], ["routerLink", "/service-details", 1, "default-btn"], [1, "service-shape"], ["src", "assets/img/service/shapes/service-pattern-6.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-7.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-8.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-9.png", "alt", "shape"], ["src", "assets/img/service/shapes/service-pattern-10.png", "alt", "shape"], [1, "flaticon-credit-card"], [1, "flaticon-clean-house"], [1, "flaticon-cleaning-spray"], [1, "flaticon-wiper"], [1, "col-lg-4", "main-service-area", "blog-side-bar"], [1, "service-sidebar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "icofont-search-1"], [1, "service-list"], [1, "icofont-rounded-right"], [1, "discount-text"], ["routerLink", "/", 1, "default-btn"], [1, "discount-shapes"], ["src", "assets/img/counter/1.png", "alt", "shape"], ["src", "assets/img/counter/2.png", "alt", "shape"], ["src", "assets/img/counter/3.png", "alt", "shape"], ["src", "assets/img/counter/4.png", "alt", "shape"], ["src", "assets/img/counter/5.png", "alt", "shape"], ["src", "assets/img/counter/6.png", "alt", "shape"], ["src", "assets/img/counter/7.png", "alt", "shape"], ["src", "assets/img/counter/8.png", "alt", "shape"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Top Rated Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Fastest Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "House Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Professional Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Office Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Low-Cost Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " Toilet Cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " Stay Hygienic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " News ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " Cleaning Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " Cleaning Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " Wash Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "15% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " on your first Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2404:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/team-two/team-two.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamTwoComponent": () => (/* binding */ TeamTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class TeamTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamTwoComponent.??fac = function TeamTwoComponent_Factory(t) { return new (t || TeamTwoComponent)(); };
TeamTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamTwoComponent, selectors: [["app-team-two"]], decls: 113, vars: 0, consts: [[1, "team-title", "team-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "team-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "team-section", "team-style-four", "pt-100", "pb-70"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "team-card"], [1, "team-img"], ["src", "assets/img/team/1.png", "alt", "team member"], [1, "team-social"], ["href", "#"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-instagram"], [1, "team-text"], ["src", "assets/img/team/2.png", "alt", "team member"], ["src", "assets/img/team/3.png", "alt", "team member"], ["src", "assets/img/team/4.png", "alt", "team member"], ["src", "assets/img/team/5.png", "alt", "team member"]], template: function TeamTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Team Members Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Team Members Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Head of Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Marry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Eve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Assistent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Zeck Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Car Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Thinka Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9870:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/team/team.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.??fac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 162, vars: 0, consts: [[1, "team-title", "team-title-bg"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "team-title-text"], ["routerLink", "/"], [1, "icofont-rounded-double-right"], [1, "team-section", "team-style-two", "team-style-three", "team-members", "pt-100", "pb-70"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "team-card"], [1, "team-img"], ["src", "assets/img/team/1.png", "alt", "team member"], [1, "team-social"], ["href", "#"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-instagram"], [1, "team-text"], ["src", "assets/img/team/2.png", "alt", "team member"], ["src", "assets/img/team/3.png", "alt", "team member"], ["src", "assets/img/team/4.png", "alt", "team member"], ["src", "assets/img/team/5.png", "alt", "team member"], ["src", "assets/img/team/6.png", "alt", "team member"], ["src", "assets/img/team/7.png", "alt", "team member"], ["src", "assets/img/team/8.png", "alt", "team member"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "page-link"], [1, "icofont-rounded-left"], [1, "page-item"], ["href", "#", 1, "page-link"], ["aria-current", "page", 1, "page-item"], ["href", "#", 1, "page-link", "active"], [1, "icofont-rounded-right"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Team Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "john Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Head of Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Marry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "john Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Eve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "John Dew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Ana Kens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Office Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Zeck Thatc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Car Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Tinka Dew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3789:
/*!**********************************************************************!*\
  !*** ./src/app/fixeddepositaccount/fixeddepositaccount.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixeddepositaccountComponent": () => (/* binding */ FixeddepositaccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_application_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/application.service */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 9250);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ 7618);










function FixeddepositaccountComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_ng_template_48_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10); const modal_r8 = restoredCtx.$implicit; return modal_r8.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "The Bank shall, in addition to any right of set off or similar right prescribed by law, is entitled, without notice, to combine and consolidate all or any of my/our or Accounts with the Bank (without any liabilities to the Bank) and/or to set off or transfer any or all amounts owed by me/us or either of us or a related party to the Bank against any and all money which the Bank may hold for my/our account or any other credit be it cash, cheques, valuables deposits securities negotiable instruments or other assets belonging to me/us whether held on the current or deposit account or otherwise and whether in Naira or any other currency (hereinafter referred to as \"foreign currency\")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "The Bank shall be entitled to retain and not repay any amount whatsoever that it owed to me/us or which it holds on my/our behalf and until all amounts owed by me/us or the related party to the Bank have been repaid or discharged in full and, for so long as such amounts have not been discharged or repaid in full, the Bank shall be entitled to appropriate any amounts so owed to me/us or held on my/our behalf in or towards the repayment and discharge of the amounts owed by me/us or either of us or the related party to the Bank.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "1. When effecting any set -off the Bank shall be entitled at its absolute discretion, with or without notice to us to convert any Naira or foreign currency into the currency in which the amount owed was incurred at the applicable official exchange rate for the currencies in question prevailing in Nigeria at the time of such conversion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "2. I/We shall be responsible for all costs, expenses and liabilities arising for the purchase, retention and sale of investments made on our behalf by the Bank which include but are not limited to all taxes, statutory fees, duties and levies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "3. The Bank is hereby authorized, in the absence of any written instruction to the contrary, to place my/our funds in any appropriate investment (which for the purpose of this clause shall include but not be limited to investments in Commercial Paper whether guaranteed by the Bank or Otherwise) or on deposit and to renew/reinvest at maturity any investments or deposit made in my/our names(s) on the same terms and conditions that applied to such investment/deposit immediately prior to its maturity or on such other terms and conditions as the Bank may, in its absolute discretion, consider appropriate under the circumstances.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "4. The Bank may, unless otherwise instructed by me/us, retain on my/our behalf, on a safe custody basis, any investment instruments issued in respect of an investment made on my/our behalf and unless otherwise specifically agreed. I/We will not have recourse to the Bank for the value or worth of such investments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "5. Where the Bank, in the absence of any previous agreement as to rate of interest and costs and charges that will apply if my/our accounts or any of them becomes overdrawn, in its absolute discretion allows us to make any drawing that results in my/our account(s) or any of them becoming overdrawn, the Bank shall be entitled to charge such rate of interest and impose such charges as, in its absolute discretion, it considers appropriate in the circumstances and I/We agree to pay such interest and charges to the Bank on demand.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "6. I/We agree that where I/We give any instruction for a payment(s) that in aggregate exceed(s) the amounts standing to the credit of my/our account(s) against which payment is to be made, the Bank reserves the right to decline to carry out such instruction or where there is more than one transaction, to select the transaction that shall be executed without reference to the date of dispatch or time or receipt of my/our instructions, if the Bank in its discretion makes any such payment for which our/my account is not funded we/I confirm our obligation to repay the Bank whether or not the Bank makes a demand, any outstanding sum in addition to charges and interest accrued thereon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "8. Where any un-cleared effects credited to my/our account(s) by the Bank are subsequently dishonored and /or the Bank for any reason is required to repay to the paying Banker or any other party all or any part of any amount credited to our account. The Bank will be entitled to debit my/our account(s) with the amount of such un-cleared effects and/or repaid amounts plus accrued interest and applicable bank charges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "9. No failure or delay in exercising any right power or privilege vested in the Bank by these conditions shall operate as a waiver thereof nor shall any partial exercise of such right, power or privilege preclude any other or further exercise thereof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "10. If any of the Conditions or the provisions specified herein are invalid, illegal or unenforceable in any respect under the law the validity, legality and enforceability of the remaining conditions and/or provisions contained herein shall not in any manner be affected or impaired thereby.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "11. Commission and charges shall be levied in accordance with the Bank's standard scale of charges in force from time to time and copies of which are available on request. The Bank reserves the right to amend its rates of interest in accordance with its standard scale of charges and/or conditions from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "12. Where these conditions are signed by or on behalf of more than one person as the Customer, all of such persons are bounds by these terms and conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "13. Any communication by the Bank shall be deemed to have been made as soon as it is sent to the most recent address provided by me/us and the date indicated on the duplicate copy of such letter or on the Bank's mailing list will constitute the date on which the communication was sent. Any statement or confirmation of any transaction between me/us or either of us and Bank shall be deemed to have been examined by me/us and to be conclusive and binding unless within 10 workings day from the date specified on such statement/confirmation, I/We or either of us advise the Bank in writing that an item contained therein is being disputed, whether or not such item was made in accordance with the mandate from time to time given by me/us to the Bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "14. I/We understand and acknowledge that electronic mail, facsimile and verbal communications are insecure transmission media where I/We advise the Bank to accept the instruction in such manner, I/We however undertake to indemnify the Bank in full for any loss it may suffer or incur by reason of its honoring my/our Letters, electronic mail, facsimile or verbal instructions, irrespective of whether same are erroneous. Fraudulent or issued otherwise than in accordance with the mandate for my/our accounts(s) any and all payment instructions issued in accordance with the mandate for my/our account(s) and which bears or purports to bear the facsimile or electronic mail signature of the person(s) whose specimens signatures have been provided to the Bank by me/us. The Bank is hereby authorized to honor and to debit my/our account, for any and all payment instructions/confirmations issued or provided by me/us using a pre-agreed format for same which may include but is not limited to oral or written Instructions/confirmations and where given orally such oral instruction may if previously agreed involves the use of specific password(s) and when in writing may be given by letter, facsimile or electronic mail.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "15. I/We hereby authorize the Bank to debit my/our account with the cost incurred in respect of the issuance of the cheque book(s) for the above account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "16. Honour all cheques or other orders/instruments which may be drawn on the said account provided such cheques or orders/instruments are signed by me/us and to debit such cheques or orders/instrument s to the said account whether such account be for the time being in credit or overdrawn in consequences of such debit without prejudice to your right to refuse to allow any overdraft or increase of overdraft and in consideration, I/We agree: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "a. To assume full responsibility for the genuineness or correctness and validity of all endorsements appearing on all cheques, orders, bills, notes, negotiable instruments, receipts and/or other documents deposited in my/our account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "b. To be responsible for any repayment of any overdraft with interest and to comply with the Bank's rules and new rates as advised by the Bank from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "c. To free the Bank from any responsibility for any loss or damage of funds deposited with the Bank due to any future government order, law, tax, embargo, moratorium, exchange restriction and/or all other causes beyond the Bank's control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "d. That all funds standing to my/our credit are payable on demand only on such local currency as may be in circulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "e. To be bound by any notification of change in the conditions governing the account directed to my/our last known address and any notice or letter sent to my/our last known address shall be considered as duly delivered and received by me/us at the time it would be delivered in the ordinary course of post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "f. Customers should not write out cheques in staff's name. All cheques for deposits should be made out in customer's name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "g. Customers should desist from transferring money from their accounts into staff's accounts. Impromptu cash pickups at the customer's premises by staff should not exceed N500,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "h. Customers who wish to enjoy cash pick up services should makes a formal request which would be handled in accordance with the laid down procedure for cash pick up. Cash in excess of N500, 000 should be paid over the counter by the customer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "i. That if a cheque credited to my/our individual account is returned dishonored, the same may be transmitted to me/us through my/our last known address either by bearer or by post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "j. And I/we note that the Bank will accept no liability whatsoever for funds handed to members of the staff outside banking hours or outside hours or outside the bank's premises. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "k. That my/our attention has also drawn to the necessity of safe guarding my/our passwords and access codes to the bank's non-branch channels including, but not limited to ATM, Internet Banking, Telephone Banking, Mobile Banking and SMS Banking, so that unauthorized persons are unable to gain access to it and to the fact that neglect of this precaution may be a ground for any consequential loss being charged to my/our account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "l. That any Bank is under no obligation to honour any cheques(s) drawn on the account unless there are sufficient fund in the account to cover the value of the said cheque(s) and I/we understand and agree that any such cheque(s) may be returned to me/us unpaid, but if paid, we are obliged to repay the bank on demand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "m. That any disagreements with entries on my/our bank statements will be made by me/us within 15 workings days of the dispatched of the bank statements. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Failing receipt by the Bank of a notice of disagreement of the entries within 15days from the date of dispatch of my/our Bank statements as rendered is correct. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "n. That any sum standing to the debit of the current account shall be liable to interest charges at the rate fixed by the bank from time to time. The bank is authorized to debit from the account the usual banking charges, interest commission, and any service charge set by Management from time to time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Electronic Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "We confirm and agree that the following terms and conditions shall govern my/our Electronic Banking transactions with the Bank. The following terms and conditions shall govern the Bank's e-Banking Services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "div", 54);
} }
function FixeddepositaccountComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
const _c0 = function (a0) { return { display: a0 }; };
class FixeddepositaccountComponent {
    constructor(aps, router, modalService) {
        this.aps = aps;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        //public showOverlay = true;
        this.obj = { Amount: 1000000, InterestRate: 10, Tenure: 90, CustomerID: "", LiquidationAccount: "", ProductCode: "300" };
        this.AccountNumber = "";
        this.SuccessMessage = "";
        this.CustomerID = "";
        this.FullName = "";
        this.btn = "Submit Application";
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.loading = "block";
        this.error = "none";
        this.acctType = "";
        this.showOverlay = false;
        this.captcha = "";
        this.email = "uthman4u2nv@yahoo.com";
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                //Validators.minLength(8),
                //Validators.maxLength(20)
            ])
        });
    }
    onReset() {
        this.formGroup.reset();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    resolved(captchaResponse) {
        this.captcha = captchaResponse;
        console.log('Resolved captcha with response: ' + this.captcha);
    }
    confirmdetails() {
        /**var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');**/
        this.form = "none";
        this.msg = "none";
        this.confirm = "block";
        this.error = "none";
    }
    NewApplication() {
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.error = "none";
        this.router.navigate(['fixeddepositaccount']);
    }
    editApplication() {
        this.form = "block";
        this.msg = "none";
        this.confirm = "none";
        this.error = "none";
    }
    keyPress(event) {
        let t = this.obj.Tenure;
        console.log("Tenure:" + t + "Event:" + event);
    }
    between(x, min, max) {
        return x >= min && x <= max;
    }
    onChange(deviceValue) {
        let t = this.obj.Tenure;
        let nValue = parseFloat(deviceValue);
        /**BETWEEN 1m to 4.9m */
        if (this.between(nValue, 1000000, 4900000) && t.toString() === "90") {
            // something
            this.obj.InterestRate = 10;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 1000000, 4900000) && t.toString() === "180") {
            // something
            this.obj.InterestRate = 14;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 1000000, 4900000) && t.toString() === "270") {
            // something
            this.obj.InterestRate = 16;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 1000000, 4900000) && t.toString() === "365") {
            // something
            this.obj.InterestRate = 17;
            console.log("Within range" + this.obj.InterestRate);
        }
        /**END 1m-4.9m */
        /**start 5m to 9.9m */
        if (this.between(nValue, 5000000, 9900000) && t.toString() === "90") {
            // something
            this.obj.InterestRate = 11;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 5000000, 9900000) && t.toString() === "180") {
            // something
            this.obj.InterestRate = 15;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 5000000, 9900000) && t.toString() === "270") {
            // something
            this.obj.InterestRate = 17;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 5000000, 9900000) && t.toString() === "365") {
            // something
            this.obj.InterestRate = 18;
            console.log("Within range" + this.obj.InterestRate);
        }
        /**end 5m to 9.9m */
        /**start 10m to 49m */
        if (this.between(nValue, 10000000, 49000000) && t.toString() === "90") {
            // something
            this.obj.InterestRate = 12;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 10000000, 49000000) && t.toString() === "180") {
            // something
            this.obj.InterestRate = 17;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 10000000, 49000000) && t.toString() === "270") {
            // something
            this.obj.InterestRate = 18;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 10000000, 49000000) && t.toString() === "365") {
            // something
            this.obj.InterestRate = 19;
            console.log("Within range" + this.obj.InterestRate);
        }
        /**end 10m to 49m */
        /**start 50m and above */
        if (this.between(nValue, 50000000, 500000000) && t.toString() === "90") {
            // something
            this.obj.InterestRate = 13;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 50000000, 500000000) && t.toString() === "180") {
            // something
            this.obj.InterestRate = 18;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 50000000, 500000000) && t.toString() === "270") {
            // something
            this.obj.InterestRate = 19;
            console.log("Within range" + this.obj.InterestRate);
        }
        if (this.between(nValue, 50000000, 500000000) && t.toString() === "365") {
            // something
            this.obj.InterestRate = 20;
            console.log("Within range" + this.obj.InterestRate);
        }
        /**end 50m and above */
    }
    SubmitApplication(data) {
        this.showOverlay = true;
        this.aps.SubmitFixedApplication(data).subscribe(d => {
            console.log(data);
            console.log(d);
            if (d.responseCode == "00") {
                this.SuccessMessage = d.responseMessage;
                this.obj = { Amount: 1000000, InterestRate: 10, Tenure: 90, CustomerID: "", LiquidationAccount: "", ProductCode: "300" };
                this.form = "none";
                this.msg = "block";
                this.confirm = "none";
            }
            else {
                this.form = "none";
                this.msg = "none";
                this.confirm = "none";
                this.error = "block";
            }
            this.showOverlay = false;
        });
    }
}
FixeddepositaccountComponent.??fac = function FixeddepositaccountComponent_Factory(t) { return new (t || FixeddepositaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_application_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
FixeddepositaccountComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FixeddepositaccountComponent, selectors: [["app-fixeddepositaccount"]], inputs: { obj: "obj" }, decls: 146, vars: 37, consts: [[1, "why-choose-section", "why-choose-bg"], [1, "container"], [1, "row"], [1, "col-lg-6", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "background-color", "white", "padding", "20px", "margin-bottom", "-10px"], [1, "responsive", 2, "padding", "30px"], [1, "col", "text-center"], [2, "color", "darkblue"], [2, "margin-top", "40px"], [1, "col-lg-6", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "padding-left", "20px", "padding-right", "20px"], [1, "card", 2, "border", "0px"], [1, "card-body"], [1, "alert", "alert-success", 3, "ngStyle"], [1, "list-group-item"], [1, "btn", "btn-primary", "btn-large", 3, "click"], [1, "alert", "alert-danger", 3, "ngStyle"], [1, "loading", 2, "display", "block", 3, "ngStyle"], ["content", ""], ["class", "my-overlay", 4, "ngIf"], [3, "ngStyle"], [2, "color", "#383e7e"], [1, "btn", "btn-warning", "btn-large", 3, "click"], [1, "md-form"], [1, "needs-validation"], ["accountopeningform", "ngForm"], [1, "responsive", 3, "ngStyle"], [1, "col-md-6"], [1, "form-group"], [1, "input-group-addon", "text-color"], ["type", "text", "required", "", "id", "LiquidationAccount", "name", "LiquidationAccount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LiquidationAccount", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "name", "CustomerID", "required", "", "id", "CustomerID", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CustomerID", "ngModel"], ["name", "Tenure", "id", "Tenure", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Tenure", "ngModel"], ["value", "90"], ["value", "180"], ["value", "270"], ["value", "365"], ["type", "number", "min", "1000000", "name", "Amount", "id", "Amount", "placeholder", "1000000", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Amount", "ngModel"], [1, "row", 2, "margin-top", "20px"], [3, "hidden"], [1, "input-group-addon"], ["siteKey", "6Le4bRweAAAAAA3s4_O_38uTdk9xHPUDjxurz1tU", 3, "resolved"], [1, "col-lg-12"], [1, "text-color"], ["href", "#", 3, "click"], [1, "btn", "btn-primary", "btn-large", 3, "disabled", "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function FixeddepositaccountComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Go beyond the ordinary and step into a new world where you enjoy flexibility,control and best inclass services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Some of the benefits of opening account with Baines Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "* Different account types specially suited for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "* Attractive interest rates (based on account type).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "* Your funds are fully insured by NDIC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "* Enjoy flexibility and control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_button_click_33_listener() { return ctx.NewApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Account cannot be opened");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Please kindly send us a mail at info@bainescredit.com if the issue persists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_button_click_43_listener() { return ctx.NewApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, FixeddepositaccountComponent_ng_template_48_Template, 80, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](50, FixeddepositaccountComponent_div_50_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "CONFIRM DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](64, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_button_click_72_listener() { return ctx.editApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Edit Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_button_click_75_listener() { return ctx.SubmitApplication(ctx.obj); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "form", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "FIXED DEPOSIT ACCOUNT OPENING FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "(Liquidation Account)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FixeddepositaccountComponent_Template_input_ngModelChange_91_listener($event) { return ctx.obj.LiquidationAccount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, " Liquidation Account Number is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FixeddepositaccountComponent_Template_input_ngModelChange_99_listener($event) { return ctx.obj.CustomerID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, " Customer ID is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Tenure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "select", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FixeddepositaccountComponent_Template_select_ngModelChange_108_listener($event) { return ctx.obj.Tenure = $event; })("change", function FixeddepositaccountComponent_Template_select_change_108_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "90 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "180 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "270 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "1 year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, " Tenure is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FixeddepositaccountComponent_Template_input_ngModelChange_124_listener($event) { return ctx.obj.Amount = $event; })("change", function FixeddepositaccountComponent_Template_input_change_124_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, " Amount is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Proof you are human");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "re-captcha", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resolved", function FixeddepositaccountComponent_Template_re_captcha_resolved_134_listener($event) { return ctx.resolved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "By clicking on Confirm Details button below you agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_a_click_140_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](49); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, " Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, " of Baines Credit Microfinance Bank Online Account Opening ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FixeddepositaccountComponent_Template_button_click_144_listener() { return ctx.confirmdetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Confirm Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](79);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](92);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](100);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](109);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](27, _c0, ctx.msg));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.SuccessMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](29, _c0, ctx.error));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](31, _c0, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.showOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](33, _c0, ctx.confirm));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Liquidation Account: ", ctx.obj.LiquidationAccount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Customer ID: ", ctx.obj.CustomerID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](64, 24, ctx.obj.Amount, "N"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Tenure: ", ctx.obj.Tenure, " days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Rate: ", ctx.obj.InterestRate, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.btn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](35, _c0, ctx.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.LiquidationAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r4.valid || _r4.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.CustomerID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r5.valid || _r5.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.Tenure);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r6.valid || _r6.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.obj.Amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", _r7.valid || _r7.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.captcha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", !ctx.captcha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !_r3.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__.FormGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__.RecaptchaComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: [".styled-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 25px 0;\n  font-size: 0.9em;\n  font-family: sans-serif;\n  min-width: 400px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n}\n\n.loading[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  z-index: -1;\n}\n\n.my-overlay[_ngcontent-%COMP%] {\n  left: 0 !important;\n  top: 0 !important;\n  z-index: 10000 !important;\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  background-color: rgba(0, 0, 0, 0.9) !important;\n  cursor: pointer !important;\n  visibility: visible !important;\n  transition: visibility 0s, opacity 0.4s linear !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: wait !important;\n}\n\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\n  font-size: 100px !important;\n}\n\n.text-color[_ngcontent-%COMP%] {\n  color: #383e7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpeGVkZGVwb3NpdGFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJmaXhlZGRlcG9zaXRhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlZC10YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5teS1vdmVybGF5IHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC40cyBsaW5lYXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxufVxyXG4ubXktb3ZlcmxheSBpLmZhLmZhLXNwaW5uZXIuZmEtc3BpbiwgLnNwaW5uZXItYmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjMzgzZTdlO1xyXG59Il19 */"] });


/***/ }),

/***/ 5041:
/*!*************************************************!*\
  !*** ./src/app/services/application.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationService": () => (/* binding */ ApplicationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ApplicationService {
    constructor(http) {
        this.http = http;
        this.appurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationurl;
        this.fixeddepositurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fixeddepositurl;
    }
    SubmitApplication(data) {
        return this.http.post(this.appurl, data, { responseType: 'json' });
    }
    SubmitFixedApplication(data) {
        return this.http.post(this.fixeddepositurl, data, { responseType: 'json' });
    }
}
ApplicationService.??fac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApplicationService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ApplicationService, factory: ApplicationService.??fac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    applicationurl: 'https://bainesaccountopeningapi.herokuapp.com/OnlineApply',
    fixeddepositurl: 'https://bainesaccountopeningapi.herokuapp.com/OpenFixedDepositAccount'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map