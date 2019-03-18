import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
//import { googleSocialLogin, facebookSocialLogin } from '../authActions';

const SocialLogin = ({facebookSocialLogin, googleSocialLogin}) => {
  return (
        <div>
          <Button onClick={() => facebookSocialLogin('facebook')} type="button" style={{ marginBottom: '10px' }} fluid color="facebook">
            <Icon name="facebook" /> Login with Facebook
          </Button>
    
          <Button onClick={() => googleSocialLogin('google')} type="button" fluid color="google plus">
            <Icon name="google plus" />
            Login with Google
          </Button>
        </div>
  )
}

export default SocialLogin
