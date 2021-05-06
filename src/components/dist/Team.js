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
exports.mapTeam = exports.Team = void 0;
var react_1 = require("react");
var Player_1 = require("./Player");
function mapTeam(teams, teamNames) {
    var displayTeams = [];
    if (teams.length !== teamNames.length) {
        return displayTeams;
    }
    for (var pos in teams) {
        displayTeams.push(react_1["default"].createElement(Team, { players: teams[pos].players, playerNames: teamNames[pos].playerNames, name: teamNames[pos].name }));
    }
    return displayTeams;
}
exports.mapTeam = mapTeam;
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Team.prototype.render = function () {
        var players = this.props.players;
        var displayPlayers = [];
        if (players.length !== 0) {
            var playerNames = this.props.playerNames;
            displayPlayers = Player_1.mapPlayer(players, playerNames);
        }
        return (react_1["default"].createElement("li", { className: "team" },
            react_1["default"].createElement("h1", { className: "teamName" }, this.props.name),
            react_1["default"].createElement("ol", { className: "playerList" }, displayPlayers)));
    };
    return Team;
}(react_1["default"].Component));
exports.Team = Team;
