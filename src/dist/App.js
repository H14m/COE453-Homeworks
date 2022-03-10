"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Blogs_1 = require("./components/Blogs");
var Courses_1 = require("./components/Courses");
var CV_1 = require("./components/CV");
var Home_1 = require("./components/Home");
var Projects_1 = require("./components/Projects");
require("./stylesheets/App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
            react_1["default"].createElement("div", { className: 'header' },
                react_1["default"].createElement("div", { className: "logo" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "HaithamAbdulaziz")),
                react_1["default"].createElement("ul", { className: 'nav' },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/cv" }, "CV")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/courses" }, "Courses")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Projects" }, "Projects")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Blogs" }, "Blogs"))),
                react_1["default"].createElement("a", { href: "mailto:s201671280@Kfupm.edu.sa" }, "Contact")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/cv", component: CV_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/courses", component: Courses_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/Projects", component: Projects_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/Blogs", component: Blogs_1["default"] }))));
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
