import { createMemoryHistory, createRouter } from 'vue-router';

import IndexView from './pages/index.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: IndexView },
  ],
});

export default router;
