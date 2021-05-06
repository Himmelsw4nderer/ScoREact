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
require("./App.css");
var react_1 = require("react");
var Display_1 = require("./components/Display");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rounds: new Array(1).fill({ teams: new Array(5).fill({ players: new Array(3).fill({ score: 0 }) }) }),
            teamNames: new Array(5).fill({ name: "teamname", playerNames: new Array(3).fill({ name: "playername" }) })
        };
        return _this;
    }
    App.prototype.render = function () {
        var teamNames = this.state.teamNames;
        var rounds = this.state.rounds;
        var currentRound = new Array(1).fill({ players: new Array(1).fill({ score: 0 }) });
        if (rounds.length !== 0) {
            currentRound = rounds[rounds.length - 1].teams;
        }
        return (react_1["default"].createElement("div", { className: "app" },
            react_1["default"].createElement(Display_1["default"], { teams: currentRound, teamNames: teamNames })));
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
