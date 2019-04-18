import React from "react";
import { connect } from "react-redux";

import { openModal, closeModal } from "../redux/action";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      handleSubmit,
      props: { showModal, openModal, closeModal }
    } = this;

    return (
      <>
        <form onSubmit={handleSubmit}>
          Username: <input name="username" type="text" value="admin" />
          <br />
          Password: <input type="text" value="admin" />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div>
          <button type="button" onClick={() => openModal()}>
            {" "}
            Open modal{" "}
          </button>
          <button type="button" onClick={() => closeModal()}>
            {" "}
            Close modal{" "}
          </button>
          Show Modal: {showModal ? "true" : "false"}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { showModal } = state.appReducer;
  return {
    showModal
  };
};

const mapDispatchToProps = {
  openModal,
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
