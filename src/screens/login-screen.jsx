import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Forms
import LoginForm from '../components/login/login-form';

// Images
import logo from '../../assets/logo.png';

// Styles
import { Logo } from '../styles/images';
import { KeyboardAvoidingContainer } from '../styles/container';

const LoginScreen = ({ navigation }) => (
  <View style={{ backgroundColor: '#feece0', height: '100%' }}>
    <View style={{ flex: 1 }}>
      <Logo source={logo} />
    </View>

    <KeyboardAvoidingContainer style={{ flex: 1 }} behavior="padding">
      <LoginForm navigation={navigation} />
    </KeyboardAvoidingContainer>
  </View>
);

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default LoginScreen;
