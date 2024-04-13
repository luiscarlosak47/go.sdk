Go.views({
  "/": {
    name: "home",
    title: `${Go.lang("docs")} - ${Go.lang("app_name")}`,
    components: [{ target: ".body", src: Go.base("", "html/home.html") }],
  },
});
