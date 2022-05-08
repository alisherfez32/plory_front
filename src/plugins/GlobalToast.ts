import { createToastInterface, PluginOptions } from 'vue-toastification';
import { globalEventBus } from './vue-toast';

// Call this function once to create and mount a global toast container

export function createGlobalToast(options?: PluginOptions) {
  return createToastInterface({ ...options, eventBus: globalEventBus });
}
