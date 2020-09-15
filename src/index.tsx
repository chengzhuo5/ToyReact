import { default as ToyReact, Component } from './toy-react';
const simpleTag = (
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
class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>content的值为：{this.props.content}</h2>
        <h3>下面是children</h3>
        {this.children}
      </div>
    );
  }
}
ToyReact.render(
  <div>
    <MyComponent content={1}>
      <MyComponent content={2}>{simpleTag}</MyComponent>
    </MyComponent>
  </div>,
  document.body
);
