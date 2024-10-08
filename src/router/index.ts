import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoading } from '@/stores/loading';
import ShowView from '@/views/recipes/ShowView.vue';
import NotFoundView from '@/views/errors/NotFoundView.vue';
import IndexView from '@/views/recipes/IndexView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: IndexView
    },
    {
      path: '/recipes/:recipe',
      name: 'show-recipe',
      component: ShowView
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

const loadingState = useLoading();

router.beforeEach((to, from, next) => {
  loadingState.isLoading = true;
  next();
});

router.afterEach(() => {
  loadingState.isLoading = false;
});

export default router
