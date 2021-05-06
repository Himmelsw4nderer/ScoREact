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
exports.mapPlayer = exports.Player = void 0;
var react_1 = require("react");
function mapPlayer(players, playerNames) {
    var displayPlayer = [];
    if (players.length !== playerNames.length) {
        return displayPlayer;
    }
    for (var pos in players) {
        displayPlayer.push(react_1["default"].createElement(Player, { name: playerNames[pos].name, score: players[pos].score }));
    }
    return displayPlayer;
}
exports.mapPlayer = mapPlayer;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.render = function () {
        return (react_1["default"].createElement("li", null,
            react_1["default"].createElement("div", { className: "player" },
                react_1["default"].createElement("h2", { className: "name" }, this.props.name),
                react_1["default"].createElement("h2", { className: "score" }, this.props.score))));
    };
    return Player;
}(react_1["default"].Component));
exports.Player = Player;
