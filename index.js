import { renderPhoneBook } from "./js/render";

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    renderPhoneBook();
  };

  window.phoneBookInit = init;
}