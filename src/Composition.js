import React, { Fragment } from 'react';

const FancyBorder = ({...props}) => {
  console.log('composition', props);
  return <div className={'FancyBorder FancyBorder-' + props.color}> {props.children}</div>
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <Fragment>
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spaceraft!</p>
      </Fragment>
    </FancyBorder>
  )
};

const Contacts = () => {
  return <div className="Contacts" />
};

const Chat = () => {
  return <div className="Chat" />
};

const SplitPane = (props) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
};

class Composition extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Composition component</h1>
        <WelcomeDialog />
        <SplitPane
          left={<Contacts />}
          right={<Chat />}
        />
      </div>
    )
  }
}

export default Composition;