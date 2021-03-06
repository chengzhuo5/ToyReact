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
      const component = new type(attrs)
      component.children = children
      const dom = component.render()
      component._dom = dom
      return dom
    }
  }
  static render(el: HTMLElement, container: HTMLElement) {
    container.appendChild(el);
  }
}
export class Component {
  props = Object.create(null);
  state = Object.create(null);
  children
  _dom
  // readonly setState = function() {
  //   state
  // }
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
}
window.ToyReact = ToyReact;
export const render = ToyReact.render
export default ToyReact;
