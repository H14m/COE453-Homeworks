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
var CV = /** @class */ (function (_super) {
    __extends(CV, _super);
    function CV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CV.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "column" }),
            react_1["default"].createElement("div", { className: "column", id: "mid" },
                react_1["default"].createElement("div", { className: "hr" },
                    react_1["default"].createElement("div", { className: "split" },
                        react_1["default"].createElement("div", { className: "some" },
                            react_1["default"].createElement("h2", { id: "info" }, "Haitham Alsunaydi"),
                            react_1["default"].createElement("p", { id: "info" }, "Software Engineer | Email:s201671280@kfupm.edu.sa")),
                        react_1["default"].createElement("h4", null,
                            react_1["default"].createElement("a", { href: "../resourses/CV.pdf", download: true }, "Download CV")))),
                react_1["default"].createElement("div", { className: "hr" },
                    " ",
                    react_1["default"].createElement("h2", null, "Objective"),
                    react_1["default"].createElement("p", null, "A software engineer intersted in databases and web development")),
                react_1["default"].createElement("div", { className: "hr" },
                    react_1["default"].createElement("h2", null, "Education"),
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("strong", null, " King Fahd University of Petroleum & Minerals "),
                        " ",
                        react_1["default"].createElement("br", null),
                        "Computer Software Engineering Bachelor's degree",
                        react_1["default"].createElement("br", null),
                        "2016 - 2022 ")),
                react_1["default"].createElement("div", { className: "hr" },
                    react_1["default"].createElement("h2", null, "Work Experience"),
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("strong", null,
                            "  Software Engineering - Summer training ",
                            react_1["default"].createElement("br", null),
                            "Arabian Drilling Company ",
                            react_1["default"].createElement("br", null),
                            " "),
                        "Aug - Nov 2021",
                        react_1["default"].createElement("br", null),
                        "- Cleaning data",
                        react_1["default"].createElement("br", null),
                        "- Building a DataBase using Access",
                        react_1["default"].createElement("br", null),
                        "- Moving the data from the excel to the database")),
                react_1["default"].createElement("div", { className: "hr" },
                    react_1["default"].createElement("h2", null, "Skills"),
                    react_1["default"].createElement("table", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null, "HTML/CSS"),
                            react_1["default"].createElement("td", null, "JavaScript"),
                            react_1["default"].createElement("td", null, "Java")),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null, "Python"),
                            react_1["default"].createElement("td", null, "Flutter"),
                            react_1["default"].createElement("td", null, "sql")),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null, "firebase"),
                            react_1["default"].createElement("td", null, "php"),
                            react_1["default"].createElement("td", null)))),
                react_1["default"].createElement("div", { className: "hr" },
                    " ",
                    react_1["default"].createElement("h2", null, "Languages"),
                    react_1["default"].createElement("p", null,
                        " - Arabic ",
                        react_1["default"].createElement("br", null),
                        "- English "))),
            react_1["default"].createElement("div", { className: "column" })));
    };
    return CV;
}(react_1["default"].Component));
exports["default"] = CV;
