import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: "/",
});

registerApplication({
  name: "@fms/mfe-main",
  app: () => System.import("@fms/mfe-main"),
  activeWhen: "/main",
});


start({
  urlRerouteOnly: true,
});
