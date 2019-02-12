import React, { Component } from 'react';

import About from './About';
import Clock from './Clock';
import HandingEvent from './HandlingEvent';
import Condition from './Condition';
import ListKeys from './ListKeys';
import Select from './Select';
import LiftingState from './LiftingState';
import Composition from './Composition';
import Refs from './Refs';
import Lazyload from './Lazyload';
import ThemeButton from './Context/themeButton';
import { ThemeContext, themes } from './Context/themeContext';
import { Hooks } from './Hooks';

class App extends Component {
  state = {
    theme: themes.light
  }
  render() {
    const { theme } = this.state;

    return (
      <div className="App">
        <About type="ads">
          this is props children
        </About>
        <Clock name="Clock" />
        <HandingEvent />
        <Condition />
        <ListKeys />
        <Select />
        <LiftingState />
        <Composition />
        <Refs />
        <Lazyload />
        <ThemeContext.Provider value={theme}>
          <ThemeButton />
        </ThemeContext.Provider>
        <Hooks />
      </div>
    );
  }
}

export default App;
