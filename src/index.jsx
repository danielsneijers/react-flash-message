import React, { Component } from 'react';
import { node, number, bool } from 'prop-types';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: true };

    this.hide = this.hide.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  componentDidMount() {
    const { duration } = this.props;
    this.remaining = duration;
    this.resumeTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  hide() {
    this.setState({ isVisible: false });
  }

  resumeTimer() {
    window.clearTimeout(this.timer);

    this.start = new Date();
    this.timer = setTimeout(this.hide, this.remaining);
  }

  pauseTimer() {
    const { persistOnHover } = this.props;
    if (persistOnHover) {
      clearTimeout(this.timer);

      this.remaining -= new Date() - this.start;
    }
  }

  render() {
    const { isVisible } = this.state;
    const { children } = this.props;

    return isVisible ? (
      <div onMouseEnter={this.pauseTimer} onMouseLeave={this.resumeTimer}>
        {children}
      </div>
    ) : null;
  }
}

FlashMessage.defaultProps = {
  duration: 5000,
  children: null,
  persistOnHover: true,
};

FlashMessage.propTypes = {
  children: node,
  duration: number,
  persistOnHover: bool,
};

export default FlashMessage;
