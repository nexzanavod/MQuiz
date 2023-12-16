const config = {
  translations:{
    en:{
      "app.components.LeftMenu.navbrand.title": "MQuiz App",
      "Auth.form.welcome.title": "Welcome to MQuiz Admin!",
      "Auth.form.welcome.subtitle": "Log in to your MQuiz account",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
