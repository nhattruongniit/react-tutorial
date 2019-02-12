import React from 'react';
import { ThemeContext } from './themeContext';

class ThemeButton extends React.Component {
  render() {
    let themes = this.context;

    return (
      <div>
        <h1> This is Context API</h1>
        <button style={{backgroundColor: themes.background}}>Context API</button>
      </div>
    )
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
