let arr = [
  { text: "Сделать что-то", done: false },
  { text: "Сделать чего-то", done: true },
  { text: "Сделать как-то", done: false },
  { text: "Сделать когда-то", done: true },
  { text: "Сделать кому-то", done: false },
];
const list = document.querySelector(".list");
const inp = document.querySelector(".inp");
const btn_save = document.querySelector("#btn_save");

const render = (arr) => {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    const del = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = arr[i].done;
    del.textContent = "x";
    div.textContent = arr[i].text;
    div.append(del);
    div.prepend(checkbox);
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.overflowWrap = "anywhere";
    list.append(div);
    del.addEventListener("click", () => {
      remove(i);
    });
    checkbox.addEventListener("change", () => {
      checkTodo(i);
      if (checkbox.checked) {
        div.style.backgroundColor = "blue";
      } else {
        div.style.backgroundColor = "#6c87b5";
      }
    });

    if (checkbox.checked) {
      div.style.backgroundColor = "blue";
    }
  }
};

const remove = (index, array = arr) => {
  array.splice(index, 1);
  render(arr);
};

const addTodo = (text) => {
  arr.push({ text, done: false });
  render(arr);
};
btn_save.addEventListener("click", () => {
  if (inp.value) {
    addTodo(inp.value);
    list.innerHTML = "";
    render(arr);
    inp.value = "";
  }
});

const checkTodo = (i) => {
  arr[i].done = !arr[i].done;
};

render(arr);
