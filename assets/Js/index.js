let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.backgroundColor = "#ffffff";
container.style.width = "100%";
container.style.height = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.alignItems = "center";

let content = document.createElement("div");
container.className = "content";
container.appendChild(content);
/* content.style.backgroundColor = "#ffffff" */
content.style.width = "50%";
content.style.margin = "0 auto";
content.style.height = "auto";
content.style.padding = "30px 0px";
content.style.border = "1px solid #eeeeee";

let username = document.createElement("input");
content.appendChild(username);
username.className = "username";
username.style.width = "30%";
username.style.height = "auto";
username.style.padding = "10px 20px";
/* username.style.backgroundColor = "transparent" */
username.style.border = ".3px solid #aaaaaa";
username.style.color = "purple";
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Your name");

let fontsize = document.createElement("input");
content.appendChild(fontsize);
fontsize.className = "fontsize";
fontsize.style.height = "auto";
fontsize.style.padding = "10px 20px";
fontsize.style.border = ".3px solid #aaaaaa";
fontsize.style.color = "purple";
fontsize.setAttribute("type", "number");

let color = document.createElement("input");
content.appendChild(color);
color.className = "color";
color.style.width = "20%";
color.style.padding = "0px 10px";
color.style.height = "30px";
color.style.border = ".3px solid #aaaaaa";
color.style.color = "purple";
color.setAttribute("type", "color");

let Update = document.createElement("button");
content.appendChild(Update);
Update.className = "Update";
Update.style.width = "20%";
Update.style.height = "auto";
Update.style.border = ".3px solid #aaaaaa";
Update.style.color = "white";
Update.style.backgroundColor = "purple";
Update.innerHTML = "Update";
Update.setAttribute("name", "Update");

/* let inputName = document.getElementById("username").value;
let inputSize = document.getElementById("fontsize").value;
let inputColor = document.getElementById("color").value;
 */

Update.addEventListener("click", handleForm);
let output = document.createElement("p");

function handleForm() {
  const nama = username.value;
  const sizee = fontsize.value;
  const colorr = color.value;
  content.appendChild(output);
  output.style.color = colorr;
  output.style.fontSize = sizee + "px";
  output.style.textAlign = "center";
  output.textContent = nama;
}
