export default {
  "/": {
    name: "home",
    title: `${Go.lang("docs")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/home.html") }],
  },
  404: {
    name: "404",
    title: `${Go.lang("404")} - ${Go.lang("app_name")}`,
    components: [{ target: ".app", src: Go.base("", "html/404.html") }],
  },
};
