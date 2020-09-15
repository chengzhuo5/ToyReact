interface Window {
  ToyReact: any;
}
const ToyReact = {
  createElement(
    tagName: string,
    attrs: { [name: string]: string },
    ...children: (HTMLElement | string)[]
  ) {
    const el = document.createElement(tagName);
    for (const attr in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
        const value = attrs[attr];
        el.setAttribute(attr, value)
      }
    }
    for (const child of children) {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child))
      } else {
        el.appendChild(child)
      }
    }
    return el
  },
  render(el: HTMLElement, container: HTMLElement) {
    container.appendChild(el)
  }
};
const a = (
  <div id="a" class="cc">
    123
    <div id="b" class="cc">
      456
    </div>
    <div id="c" class="cc">
      789
    </div>
  </div>
);
ToyReact.render(a, document.body)
window.ToyReact = ToyReact;
