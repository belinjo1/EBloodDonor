import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/announcement/:id",
    name: "AnnouncementShow",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "announcement" */ "../views/AnnouncementShow.vue"
      ),
  },

  {
    path: "/about",
    name: "About",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/appointment",
    name: "MyAppointments",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "appointment" */ "../views/MyAppointments.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/Contact",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "contactUs" */ "../views/ContactUs.vue"),
  },

  //--------------------------------- Admin Routes ---------------------------------
  {
    path: "/admin/users",
    name: "ListUsers",
    meta: { requiresAuth: true, isAdmin: true },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/admin/ListUsers.vue"),
  },
  {
    path: "/admin/announcements",
    name: "ListAnnouncements",
    meta: { requiresAuth: true, isAdmin: true },
    component: () =>
      import(
        /* webpackChunkName: "announcements" */ "../views/admin/ListAnnouncements.vue"
      ),
  },
  {
    path: "/admin/appointments",
    name: "ListAppointments",
    meta: { requiresAuth: true, isAdmin: true },
    component: () =>
      import(
        /* webpackChunkName: "appointments" */ "../views/admin/ListAppointments.vue"
      ),
  },
  {
    path: "/admin/messages",
    name: "messages",
    meta: { requiresAuth: true, isAdmin: true },
    component: () =>
      import(
        /* webpackChunkName: "messages" */ "../views/admin/ListMessages.vue"
      ),
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "404" */ "../views/404.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (store.getters.isAdmin) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
