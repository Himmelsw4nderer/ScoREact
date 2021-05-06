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
var Team_1 = require("../components/Team");
var Display = /** @class */ (function (_super) {
    __extends(Display, _super);
    function Display() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Display.prototype.render = function () {
        var currentRound = this.props.teams;
        var teamNames = this.props.teamNames;
        var displayTeams = Team_1.mapTeam(currentRound, teamNames);
        return (react_1["default"].createElement("div", { className: "display" },
            react_1["default"].createElement("ol", { className: "teamList" }, displayTeams)));
    };
    return Display;
}(react_1["default"].Component));
exports["default"] = Display;
