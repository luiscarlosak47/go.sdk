Go.config("appIcon", Go.base("", "img/icons/256x256.png"));

Go.import(Go.base("", "js/views.js"), (module) => {
  console.log(module);
});
