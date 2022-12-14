import React from 'react';
import { Field, reduxForm } from "redux-form/dist/redux-form";

class StreamCreate extends React.Component {

  renderInput=({ input, label, meta })=>{
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>

    );
  }

  onSubmit=(formValues)=>{
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }


}

const validate = formValues => {
  const errors = {};

  if (!formValues.ttle) {
    errors.title = "You must a title"
  }
  if (!formValues.description) {
    errors.description = "You must enter a description"
  }
  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);