import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React Native
import { AsyncStorage } from 'react-native';

// Material Design
import { Appbar, Avatar } from 'react-native-paper';

// Config
import config from '../../../config';

const Header = ({ navigation }) => {
  const [me, setMe] = useState({});

  const fetchMe = async () => {
    const token = await AsyncStorage.getItem('@token');

    const { data } = await axios({
      method: 'GET',
      url: `${config.apiUrl}/users/q/get-me`,
      headers: {
        authorization: `Bearer ${token}`,
        'x-api-key': config.apiKey,
      },
    });

    setMe(data);
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={null} />
      {!me ? (
        <Appbar.Content title="Bienvenido" />
      ) : (
        <>
          <Appbar.Content
            title={`Bienvenid${me.gender === 'H' ? 'o' : 'a'}, ${me.firstName}`}
          />
          <Avatar.Image
            size={24}
            source={{ uri: me.avatar }}
            style={{ marginRight: 15 }}
          />
        </>
      )}
    </Appbar.Header>
  );
};

export default Header;
