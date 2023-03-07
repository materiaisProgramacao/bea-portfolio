const header = document.getElementById("headerId");

const nav = document.createElement("nav");

header.appendChild(nav);

let linksInfo = [
  {href: "index.html", text: "Início"},
  {href: "sobre.html", text: "Sobre"},
  {href: "contato.html", text: "Contato"}
];

for (link of linksInfo) {
  const linkElem = document.createElement("a");

  linkElem.href = link.href;
  linkElem.textContent = link.text;
  
  header.appendChild(linkElem);
};
