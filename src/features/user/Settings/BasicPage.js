import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import DateInput from "../../../app/form/DateInput";
import PlaceInput from "../../../app/form/PlaceInput";
import TextInput from "../../../app/form/TextInput";
import RadioInput from "../../../app/form/RadioInput";

class BasicPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Form.Group inline>
            <label>Gender: </label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label="Male"
              component={RadioInput}
            />
            <Field
              name="gender"
              type="radio"
              value="female"
              label="Female"
              component={RadioInput}
            />
          </Form.Group>
          <Field
            name="dateOfBirth"
            type="text"
            dateFormat="YYYY-MM-dd"
            component={DateInput}
            placeholder="Date of Birth"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
          />
          <Field
            name="city"
            placeholder="Home Town"
            options={{ types: ["(cities)"] }}
            label="Female"
            component={PlaceInput}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(BasicPage);
