export default {
  "/": {
    name: "home",
    title: Go.lang("app_name"),
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
  "#page1": {
    name: "page1",
    title: `${Go.lang("page1")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/page1.html") }],
  },
  "#page2": {
    name: "page2",
    title: `${Go.lang("page2")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/page2.html") }],
  },
  "#page3": {
    name: "page3",
    title: `${Go.lang("page3")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/page3.html") }],
  },
};
