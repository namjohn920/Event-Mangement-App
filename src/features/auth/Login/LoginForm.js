import React from 'react';
import {connect} from 'react-redux'   
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/form/TextInput';
import { login, facebookSocialLogin, googleSocialLogin } from '../authActions'
import SocialLogin from '../SocialLogin/SocialLogin';

const actions = {
    login,
    facebookSocialLogin,
    googleSocialLogin
}

const LoginForm = ({login, handleSubmit, error, facebookSocialLogin,
  googleSocialLogin}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>
          Or
        </Divider>
        <SocialLogin facebookSocialLogin={facebookSocialLogin} googleSocialLogin={googleSocialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));