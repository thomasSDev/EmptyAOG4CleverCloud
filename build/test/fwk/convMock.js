"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conv = /** @class */ (function () {
    function Conv() {
        this.messages = [];
        this.surface = {
            capabilities: new Map()
        };
        this.closed = false;
        this.data = {};
        this.user = {
            storage: {}
        };
    }
    Conv.prototype.addCapabilities = function (capabilities) {
        var _this = this;
        capabilities.forEach(function (element) {
            _this.surface.capabilities.set(element);
        });
    };
    ;
    Conv.prototype.ask = function (message) {
        this.messages.push(message);
    };
    ;
    Conv.prototype.asked = function () {
        return this.messages;
    };
    ;
    Conv.prototype.close = function (message) {
        this.closed = true;
        this.messages.push(message);
    };
    ;
    Conv.prototype.reset = function () {
        this.messages.splice(0, this.messages.length);
        console.log(this.surface);
        this.surface.capabilities.splice(0, this.surface.capabilities.length);
    };
    ;
    Conv.prototype.isClose = function () {
        return this.closed;
    };
    return Conv;
}());
exports.Conv = Conv;
;
//# sourceMappingURL=convMock.js.map