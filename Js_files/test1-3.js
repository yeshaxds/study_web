// 模板字面量
let header = "";
let tags = ["JavaScript", "ES6", "Template Literals"];
let html = `<h3>${header}</h3>`;
for (const x of tags){
    html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo3").innerHTML = html;
