import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { scholarshipsField } from 'utils/formFields';
import { fetchScholarship, editScholarship } from 'actions';
import { mapStateToProps } from 'reducers/scholarships';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'A title is required';
  }
  if (!values.deadline) {
    errors.deadline = 'A deadline is required';
  }
  if (!values.eligibility) {
    errors.eligibility = 'An eligibility requirement is required';
  }
  if (!values.description) {
    errors.description = 'A description is required';
  }
  return errors;
};

export class ScholarshipsEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchScholarship(id);
  }

  render() {
    const { handleSubmit } = this.props;

    if (this.props.editSuccess) {
      return <Redirect to={`/activities/scholarships/${this.props.editId}`} />;
    }

    return (
      <div className="container text-center">
        <h1>Edit Scholarship</h1>
        <form
          onSubmit={handleSubmit(this.props.editScholarship)}
        >
          <Field
            name="title"
            label="Title"
            type="text"
            component={scholarshipsField}
          />
          <Field
            name="description"
            label="Description"
            type="textarea"
            component={scholarshipsField}
          />
          <Field
            name="eligibility"
            label="Eligibility"
            component={scholarshipsField}
          />
          <Field
            type="datetime-local"
            name="deadline"
            label="Deadline"
            component={scholarshipsField}
          />
          <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const connectedForm = reduxForm({
  form: 'edit-scholarship',
  validate,
})(ScholarshipsEdit);

export default connect(
  mapStateToProps,
  { fetchScholarship, editScholarship },
)(connectedForm);
