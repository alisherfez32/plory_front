import { App } from 'vue';
import {
  createToastInterface,
  EventBus,
  PluginOptions,
} from 'vue-toastification';
import { createGlobalToast } from './GlobalToast.js';

// This will be the global event bus
export const globalEventBus = new EventBus();

// Returns an interface to the global toast container
export function useGlobalToast() {
  return createToastInterface(globalEventBus);
}

// Use this as a plugin to register instance and injected toasts
export function provideAppToast(app: App, options?: PluginOptions) {
  // Create the global container
  const toast = createGlobalToast(options);

  // Provide using Vue dependency injection
  // app.provide(toastInjectionKey, toast);

  // Bind to the global object so it can be called with this.$toast
  app.config.globalProperties.$toast = toast;
}
