"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
exports.helpIntent = function (conv) {
    conv.ask(constants_1.messages.help);
};
exports.welcomeIntent = function (conv) {
    conv.ask(constants_1.messages.welcome);
};
exports.byeIntent = function (conv) {
    conv.ask(constants_1.messages.goodbye);
};
//# sourceMappingURL=base.intent.js.map