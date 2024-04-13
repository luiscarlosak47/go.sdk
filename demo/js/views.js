export default {
  "/": {
    name: "home",
    title: `${Go.lang("docs")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/home.html") }],
  },
  "/go.sdk/demo/": () => {
    return Go.do("nav/getRouteByName", "home");
  },
  "/go.sdk/demo/index.html": () => {
    return Go.do("nav/getRouteByName", "home");
  },
  404: {
    name: "404",
    title: `${Go.lang("404")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/404.html") }],
  },
};
