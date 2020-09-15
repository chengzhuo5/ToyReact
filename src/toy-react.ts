class ToyReact {
  private static createElement(
    type: string | typeof Component,
    attrs: { [name: string]: any },
    ...children: (HTMLElement | string | number | bigint | HTMLElement[])[]
  ) {
    if (typeof type === 'string') {
      const el = document.createElement(type);
      for (const attr in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
          const value = attrs[attr];
          el.setAttribute(attr, value);
        }
      }
      for (const child of children) {
        if (
          typeof child === 'bigint' ||
          typeof child === 'number' ||
          typeof child === 'string'
        ) {
          el.appendChild(document.createTextNode('' + child));
        } else if (Array.isArray(child)) {
          for (const item of child) {
            el.appendChild(item);
          }
        } else {
          el.appendChild(child);
        }
      }
      return el;
    } else {
      // 组件
      return new type(attrs, children).render();
    }
  }
  static render(el: HTMLElement, container: HTMLElement) {
    container.appendChild(el);
  }
}
export class Component {
  props = Object.create(null);
  children = null;
  constructor(props, children) {
    this.props = props;
    this.children = children;
  }
  render() {
    return null;
  }
}
window.ToyReact = ToyReact;
export const render = ToyReact.render
export default ToyReact;
