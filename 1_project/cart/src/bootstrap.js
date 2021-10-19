import faker from "faker";

function mount(el) {
  let cartText = `<div>You have ${faker.datatype.number()}</div>`;
  el.innerHTML = cartText;
}

if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
