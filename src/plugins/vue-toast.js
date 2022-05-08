"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideAppToast = exports.useGlobalToast = exports.globalEventBus = void 0;
var vue_toastification_1 = require("vue-toastification");
var GlobalToast_js_1 = require("./GlobalToast.js");
// This will be the global event bus
exports.globalEventBus = new vue_toastification_1.EventBus();
// Returns an interface to the global toast container
function useGlobalToast() {
    return (0, vue_toastification_1.createToastInterface)(exports.globalEventBus);
}
exports.useGlobalToast = useGlobalToast;
// Use this as a plugin to register instance and injected toasts
function provideAppToast(app, options) {
    // Create the global container
    var toast = (0, GlobalToast_js_1.createGlobalToast)(options);
    // Provide using Vue dependency injection
    // app.provide(toastInjectionKey, toast);
    // Bind to the global object so it can be called with this.$toast
    app.config.globalProperties.$toast = toast;
}
exports.provideAppToast = provideAppToast;
