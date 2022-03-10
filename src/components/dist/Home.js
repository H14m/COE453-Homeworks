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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "split1" },
            react_1["default"].createElement("div", { className: "hcolumn" },
                react_1["default"].createElement("h1", null, "Hello , I'm Haitham Alsunaydi"),
                react_1["default"].createElement("h1", null, "Softoware Engnieer Student"),
                react_1["default"].createElement("button", { className: "button", ref: "mailto:s201671280@Kfupm.edu.sa" }, "Contact")),
            react_1["default"].createElement("div", { className: "img" })));
    };
    return Home;
}(react_1["default"].Component));
exports["default"] = Home;
