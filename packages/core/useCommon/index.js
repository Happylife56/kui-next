import {
  ref, reactive, computed, watch, onMounted, nextTick, onUnmounted,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

export function useCommon() {
  const route = useRoute();
  const router = useRouter();

  const routerName = computed(() => route.name);

  const loadPage = (name, params) => {
    if (params) router.push({ path: name, ...params });
    else if (name.includes('/')) router.push(name);
    else router.push({ name });
  };

  const isDev = () => import.meta.env.MODE === 'development';

  return {
    route, router, nextTick, ref, reactive, computed, watch, onMounted, onUnmounted, routerName, loadPage, isDev, storeToRefs,
  };
}
