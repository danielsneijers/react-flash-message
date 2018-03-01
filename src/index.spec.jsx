import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import FlashMessage from './index';

class TestComponent extends Component {
  componentDidMount() {
    this.props.track('componentDidMount');
  }
  componentWillUnmount() {
    this.props.track('componentWillUnmount');
  }
  render() {
    this.props.track('render');
    return <p>Hej, I'm a message!</p>;
  }
}

const makeComponent = props => (
  <FlashMessage {...props}>
    <TestComponent track={jest.fn()} />
  </FlashMessage>
);

describe('<FlashMessage />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders', () => {
    const tree = shallow(<FlashMessage />);

    expect(tree).toMatchSnapshot();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout.mock.calls).toMatchSnapshot();
  });

  it('disappears after x seconds', () => {
    const tree = shallow(makeComponent({ duration: 2000 }));

    expect(tree).toMatchSnapshot();

    jest.runTimersToTime(2000);
    tree.update();

    expect(tree).toMatchSnapshot();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it('removes existing timer before umounting', () => {
    const tree = shallow(makeComponent());

    expect(clearTimeout).toHaveBeenCalledTimes(1);

    tree.instance().componentWillUnmount();

    expect(clearTimeout).toHaveBeenCalledTimes(2);
    expect(clearTimeout.mock.calls).toMatchSnapshot();
  });

  it('mounts and unmounts children for use with react-transition-group', () => {
    const tracker = jest.fn();
    const Component = (
      <FlashMessage>
        <TestComponent track={tracker} />
      </FlashMessage>
    );
    const tree = mount(Component);

    expect(tracker.mock.calls).toMatchSnapshot();

    jest.runTimersToTime(5000);
    tree.update();

    expect(tracker.mock.calls).toMatchSnapshot();
  });

  it("doesn't unmount on hover when flag is set", () => {
    const tree = mount(makeComponent({ duration: 1000 }));
    tree.simulate('mouseEnter');

    jest.runTimersToTime(1000);
    tree.update();

    expect(tree).toMatchSnapshot();

    tree.simulate('mouseLeave');
    jest.runTimersToTime(1000);
    tree.update();

    expect(tree).toMatchSnapshot();
  });

  it('does unmount on hover when flag is set', () => {
    const tree = mount(
      makeComponent({ duration: 1000, persistOnHover: false })
    );
    tree.simulate('mouseEnter');

    jest.runTimersToTime(1000);
    tree.update();

    expect(tree).toMatchSnapshot();
  });
});
