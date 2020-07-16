import React from 'react';
import { View, AsyncStorage, Alert } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

// Forms
import { Formik } from 'formik';

// Material Design
import { TextInput } from 'react-native-paper';

// Config
import config from '../../../config';

// Styles
import { MarginContainer } from '../../styles/container';
import { StyledButton } from '../../styles/button';

const LoginForm = ({ navigation }) => {
  const login = async (email, password) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `${config.apiUrl}/users/login`,
        headers: {
          'super-api-key': config.superApiKey,
        },
        data: {
          email,
          password,
        },
      });

      await AsyncStorage.setItem('@token', data.token);
      navigation.navigate('AuthLoading');
    } catch (err) {
      Alert.alert('Hubo un error al ingresar tu email o contraseña');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => login(values.email, values.password)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
        <View>
          <View style={{ marginVertical: 10 }}>
            <TextInput
              label="Correo electrónico"
              mode="outlined"
              style={{ backgroundColor: '#feece0' }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <TextInput
              label="Contraseña"
              style={{ backgroundColor: '#feece0' }}
              mode="outlined"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>
          <MarginContainer vertical="20px">
            <StyledButton
              onPress={handleSubmit}
              color="#af272f"
              title="Iniciar sesión"
              loading={isSubmitting}
            >
              Iniciar sesión
            </StyledButton>
          </MarginContainer>
        </View>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default LoginForm;
