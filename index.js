const arr = [
  { url: "../img/frode-myklebust-rHs9qFMrcDk-unsplash.jpg", title: "Космос" },
  { url: "../img/mos-design-JMD0K-kCJ5I-unsplash.jpg", title: "Ночной Токио" },
  { url: "../img/nir-himi-YVLqC0vpJyg-unsplash.jpg", title: "Ущелье" },
  { url: "../img/pang-yuhao-IZlbbjelCu0-unsplash.jpg", title: "Фотоаппарат" },
  { url: "../img/peter-herrmann-PSD0PPhxUgE-unsplash.jpg", title: "Лестница в музее" },
  { url: "../img/peter-thomas-he4j9YyWFoo-unsplash.jpg", title: "Библиотека" },
  { url: "../img/the-chaffins-zWTmywY3nyg-unsplash.jpg", title: "Мостик у озера" },
  { url: "../img/sumup-SGgZ23qRrdo-unsplash.jpg", title: "Рабочий стол" },
];

const renderList = (arr) => {
  const list = document.createElement("ul");
  list.classList.add('list');

  list.style.padding = 0;
  list.style.margin = 0;
  list.style.listStyleType = "none";

  arr.forEach(({ url, title }) => {
    const item = document.createElement('li');
    item.classList.add('list__item');

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = url;
    img.alt = title;
    img.style.width = "600px";
    img.style.height = "auto";
    img.style.padding = 0;
    img.style.margin = 0;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    item.appendChild(figure);
    list.appendChild(item);
  });

  return list;
};

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  app.innerHTML = `<h1>${title}</h1>`;
  const listElement = renderList(arr);
  app.appendChild(listElement);
};


document.addEventListener('DOMContentLoaded', () => {
  init('#app', 'Список изображений');
});