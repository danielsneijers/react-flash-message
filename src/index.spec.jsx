/* eslint-disable max-classes-per-file, react/prop-types, react/no-unescaped-entities */
import '@testing-library/jest-dom';
import React, { PureComponent } from 'react';
import { render, fireEvent } from '@testing-library/react';
import FlashMessage from './index';

class TestComponent extends PureComponent {
  componentDidMount() {
    const { track } = this.props;
    track('componentDidMount');
  }

  componentWillUnmount() {
    const { track } = this.props;
    track('componentWillUnmount');
  }

  render() {
    const { track } = this.props;
    track('render');
    return <p>Hej, I'm a message!</p>;
  }
}

describe('<FlashMessage />', () => {
  beforeAll(() => {
    const constantDate = new Date('2018-02-13T04:41:20');

    /* eslint-disable-next-line no-global-assign */
    Date = class extends Date {
      constructor() {
        return constantDate;
      }
    };
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders and sets a timer', () => {
    const message = 'test';
    const { queryByText } = render(
      <FlashMessage>
        {message}
      </FlashMessage>,
    );

    expect(queryByText(message)).toBeInTheDocument();
    expect(setTimeout.mock.calls).toMatchSnapshot();
  });

  it('disappears after x seconds', () => {
    const message = 'test';
    const { queryByText } = render(
      <FlashMessage duration={2000}>
        {message}
      </FlashMessage>,
    );

    expect(queryByText(message)).toBeInTheDocument();

    jest.runTimersToTime(2000);

    expect(queryByText(message)).not.toBeInTheDocument();
  });

  it('removes existing timer before umounting', () => {
    const { unmount } = render(
      <FlashMessage>
        <TestComponent track={jest.fn()} />
      </FlashMessage>,
    );

    expect(clearTimeout).toHaveBeenCalledTimes(1);

    unmount();

    expect(clearTimeout).toHaveBeenCalledTimes(2);
  });

  it('mounts and unmounts children', () => {
    const tracker = jest.fn();
    render(
      <FlashMessage>
        <TestComponent track={tracker} />
      </FlashMessage>,
    );

    expect(tracker.mock.calls).toMatchSnapshot();

    jest.runTimersToTime(5000);

    expect(tracker.mock.calls).toMatchSnapshot();
  });

  it("doesn't unmount on hover when flag is set", () => {
    const message = 'test';
    const { queryByText } = render(<FlashMessage duration={1000}>{message}</FlashMessage>);

    fireEvent.mouseEnter(queryByText(message));
    jest.runTimersToTime(2000);

    expect(queryByText(message)).toBeInTheDocument();

    fireEvent.mouseLeave(queryByText(message));
    jest.runTimersToTime(1000);

    expect(queryByText(message)).not.toBeInTheDocument();
  });

  it('does unmount on hover when flag is set', () => {
    const message = 'test';
    const { queryByText } = render(
      <FlashMessage duration={1000} persistOnHover={false}>
        {message}
      </FlashMessage>,
    );

    fireEvent.mouseEnter(queryByText(message));
    jest.runTimersToTime(2000);

    expect(queryByText(message)).not.toBeInTheDocument();
  });
});
