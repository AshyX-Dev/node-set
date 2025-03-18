"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
var events_1 = require("events");
var Set = /** @class */ (function (_super) {
    __extends(Set, _super);
    function Set() {
        var _this = _super.call(this) || this;
        _this.many = [];
        return _this;
    }
    Set.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArray([event], args, false));
    };
    Set.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    Set.prototype.shove = function (product, index) {
        if (index === void 0) { index = -1; }
        var time = new Date();
        var productInfo = {
            value: product,
            at: time.toString(),
            timestamp: time.getTime(),
            index: undefined,
            exists: undefined
        };
        if (this.many.includes(product)) {
            productInfo.index = this.many.indexOf(product);
            productInfo.exists = true;
            this.emit("new", productInfo);
        }
        else {
            productInfo.index = index;
            productInfo.exists = true;
            this.many.splice(index, 0, product);
            this.emit("new", productInfo);
        }
    };
    Set.prototype.getAll = function () {
        return this.many;
    };
    return Set;
}(events_1.EventEmitter));
exports.Set = Set;
module.exports = { Set: Set };
