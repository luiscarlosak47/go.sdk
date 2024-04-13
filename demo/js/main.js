// Init Config
Go.config("appIcon", Go.base("", "img/icons/256x256.png"));
Go.config("appLang", "en");

// Load views/routes
Go.import(Go.base("", "js/views.js"), async (views) => {
  // Get current user language
  const lang = Go.lang().current() || Go.config("appLang");

  // Load translations
  await Go.import(Go.base("", "js/lang/" + lang + ".js"));

  // Load views/routes
  Go.views(views);

  // Start nav/router
  Go.do("nav/start");
});
