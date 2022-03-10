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
var Blogs_json_1 = require("../data/Blogs.json");
var Blogs = /** @class */ (function (_super) {
    __extends(Blogs, _super);
    function Blogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blogs.prototype.render = function () {
        var newData = Blogs_json_1["default"].items.map(function (title, text) {
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
                react_1["default"].createElement("h1", { className: 'h' }, "  Cloud Computing "),
                Blogs_json_1["default"].items.map(function (Blogs) { return react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", null, Blogs.title),
                    react_1["default"].createElement("p", null, Blogs.text)); }),
                react_1["default"].createElement("a", { href: "https://www.investopedia.com/terms/c/cloud-computing.asp", style: { color: "white" } }, "Article Source")),
            react_1["default"].createElement("div", { className: "column" })));
    };
    return Blogs;
}(react_1["default"].Component));
exports["default"] = Blogs;
