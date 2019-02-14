import React from 'react';
import { Field, reduxForm } from 'redux-form';
class SimpleForm extends React.Component {
  handleSubmit = (data) => {
     console.log('Submission received!', data);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SimpleForm = reduxForm({
  form: 'profile' // a unique name for this form
})(SimpleForm);


// Decorate the form