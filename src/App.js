import React from 'react';
import Countdown from 'react-countdown';
import Header from './components/Header';
import Timer from './components/Timer';
import Menu from './components/Menu';
import MenuItemRange from './components/MenuItemRange';
import MainButton from './components/MainButton';

function capitalize(word) {
  return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timerRef = null;
  }

  state = {
    focusTimeMin: [.1],
    shortBrakeTimeMin: [.1],
    longBrakeTimeMin: [.1],
    totalTimeSec: 1 * 60,
    remainingTimeSec: 1 * 60,
    isSettingsClicked: false,
    round: 1,
    mode: 'focus',
    currentMode: 'focus',
    isPaused: false,
    isRunning: false,
  };

  handleSettingsClick = () => {
    if (this.state.isSettingsClicked) {
      this.setState({ isSettingsClicked: false });
    } else {
      this.setState({ isSettingsClicked: true });
    }
  };

  handleReset = () => {
    this.setState({
      focusTimeMin: [25],
      shortBrakeTimeMin: [5],
      longBrakeTimeMin: [15],
    });
  };

  handleComplete = (e) => {
    this.stopTimer();

    this.setState((prev) => {
      let nextMode, nextCurrentMode, nextRound, nextTimeMin;
      if (prev.mode === 'focus') {
        if (prev.round % 4 === 0) {
          nextMode = 'long brake';
          nextCurrentMode = 'long brake';
          nextTimeMin = prev.longBrakeTimeMin[0];
        } else {
          nextMode = 'short brake';
          nextCurrentMode = 'short brake';
          nextTimeMin = prev.shortBrakeTimeMin[0];
        }
        nextRound = prev.round;
      } else {
        nextRound = prev.round + 1;
        nextMode = 'focus';
        nextCurrentMode = 'focus';
        nextTimeMin = prev.focusTimeMin[0];
      }
      return {
        mode: nextMode,
        currentMode: nextCurrentMode,
        round: nextRound,
        remainingTimeSec: nextTimeMin * 60,
        totalTimeSec: nextTimeMin * 60
      };
    }, () => {
      this.startTimer();
    });
  };

  handlePause = (time) => {
    this.setState({ remainingTimeSec: time.minutes * 60 + time.seconds });
  };

  handleStartStop = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false, mode: this.state.currentMode }, () => {
        this.timerRef.start();
      });
    } else {
      this.setState({ isPaused: true, mode: 'paused' }, () => {
        this.timerRef.pause();
      });
    }
  };

  stopTimer = () => {
    this.setState({ isRunning: false }, () => {
      this.timerRef.stop();
    });
  };

  startTimer = () => {
    this.setState({ isRunning: true }, () => {
      this.timerRef.start();
    });
  };

  setTimerRef = (ref) => {
    this.timerRef = ref;
  };

  componentDidMount = () => {
    this.setState(
      {
        remainingTimeSec: this.state.focusTimeMin * 60,
        totalTimeSec: this.state.focusTimeMin * 60,
        mode: 'focus',
        currentMode: 'focus',
      },
      () => {
        this.startTimer();
      }
    );
  };

  render() {
    const state = this.state;
    return (
      <div className="app">
        <Header
          onSettingsClick={this.handleSettingsClick}
          isSettingsClicked={state.isSettingsClicked}
        />
        {state.isSettingsClicked ? (
          <Menu handleReset={this.handleReset}>
            <MenuItemRange
              label={'Focus'}
              trackColor={'#3e98c7'}
              value={state.focusTimeMin}
              setValue={(value) => this.setState({ focusTimeMin: value })}
            />
            <MenuItemRange
              label={'Short brake'}
              trackColor={'#ffaa5c'}
              value={state.shortBrakeTimeMin}
              setValue={(value) => this.setState({ shortBrakeTimeMin: value })}
            />
            <MenuItemRange
              label={'Long brake'}
              trackColor={'#61b15a'}
              value={state.longBrakeTimeMin}
              setValue={(value) => this.setState({ longBrakeTimeMin: value })}
            />
          </Menu>
        ) : (
          <>
            <Countdown
              date={Date.now() + state.remainingTimeSec * 1000}
              autoStart={false}
              totalTimeSec={state.totalTimeSec}
              pathColor={'#ffaa5c'}
              intervalDelay={1000}
              onPause={this.handlePause}
              onComplete={this.handleComplete}
              renderer={Timer}
              ref={this.setTimerRef}
            />
            <span className="app__info">{capitalize(state.mode)}</span>
            <MainButton
              onClick={this.handleStartStop}
              icon={state.isPaused ? 'run' : 'pause'}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
