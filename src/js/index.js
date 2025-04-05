import App from "./app.js";

document.addEventListener("alpine:init", () => {
  var templates = document.querySelectorAll("svg template");
  var el, template, attribs, attrib, count, child, content;
  for (var i = 0; i < templates.length; i++) {
    el = templates[i];
    template = el.ownerDocument.createElement("template");
    el.parentNode.insertBefore(template, el);
    attribs = el.attributes;
    count = attribs.length;
    while (count-- > 0) {
      attrib = attribs[count];
      template.setAttribute(attrib.name, attrib.value);
      el.removeAttribute(attrib.name);
    }
    el.parentNode.removeChild(el);
    content = template.content;
    while ((child = el.firstChild)) {
      content.appendChild(child);
    }
  }
});

window.App = App;
