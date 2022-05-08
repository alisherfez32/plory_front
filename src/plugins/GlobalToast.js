"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobalToast = void 0;
var vue_toastification_1 = require("vue-toastification");
var vue_toast_1 = require("./vue-toast");
// Call this function once to create and mount a global toast container
function createGlobalToast(options) {
    return (0, vue_toastification_1.createToastInterface)(__assign(__assign({}, options), { eventBus: vue_toast_1.globalEventBus }));
}
exports.createGlobalToast = createGlobalToast;
