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
var Team_1 = require("./components/Team");
require("./App.css");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.render = function () {
        var rounds = this.props.rounds;
        var displayTeams = [];
        if (rounds.length !== 0) {
            var currentRound = rounds[rounds.length - 1].teams;
            var teamNames = this.props.teamNames;
            displayTeams = Team_1.mapTeam(currentRound, teamNames);
        }
        return (react_1["default"].createElement("div", { className: "app" },
            react_1["default"].createElement("ol", { className: "teamList" }, displayTeams)));
    };
    return Player;
}(react_1["default"].Component));
exports["default"] = Player;
