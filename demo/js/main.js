// Init Config
Go.config("appIcon", Go.base("", "img/icons/256x256.png"));
Go.config("lang", "en");

// Get current user language
const lang = Go.lang().current();

// Load Language
Go.import(Go.base("", "js/lang/" + lang + ".js"), (language) => {
  // Set language
  Go.lang(language);

  // Load views/routes
  Go.import(Go.base("", "js/views.js"), (views) => {
    // Set views/routes
    Go.views(views);

    // Start nav/router
    Go.do("nav/start");
  });
});
