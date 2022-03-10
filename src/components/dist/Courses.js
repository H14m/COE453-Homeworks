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
var courses_json_1 = require("../data/courses.json");
var Courses = /** @class */ (function (_super) {
    __extends(Courses, _super);
    function Courses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Courses.prototype.render = function () {
        var newData = courses_json_1["default"].items.map(function (title, text, Objectives) {
            return react_1["default"].createElement("li", null,
                title,
                " ",
                react_1["default"].createElement("br", null),
                " ",
                text);
        });
        return (react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "column" }),
            react_1["default"].createElement("div", { id: "mid" },
                react_1["default"].createElement("h1", { className: 'h' }, "Social Health"),
                courses_json_1["default"].items.map(function (Courses) { return react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", null, Courses.title),
                    react_1["default"].createElement("p", null, Courses.text),
                    react_1["default"].createElement("h3", null, "Objectives"),
                    react_1["default"].createElement("ul", null, Courses.Objectives.map(function (data) { return (react_1["default"].createElement("li", null, data)); })),
                    "                      "); })),
            react_1["default"].createElement("div", { className: "column" })));
    };
    return Courses;
}(react_1["default"].Component));
exports["default"] = Courses;
