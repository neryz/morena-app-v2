import React, { useState } from 'react';

// Material Design
import { BottomNavigation } from 'react-native-paper';

// Components
import AddRouteScreen from './home-routes/add-route-screen';
import VerifyRouteScreen from './home-routes/verify-route-screen';
import SearchRouteScreen from './home-routes/search-route-screen';
import Header from '../components/shared/header';

const UserDetailsScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'add', title: 'Nuevo registro', icon: 'plus' },
    { key: 'verify', title: 'Verificar', icon: 'check' },
    { key: 'search', title: 'Buscar', icon: 'magnify' },
  ]);

  const handleIndexChange = (index) => setIndex(index);
  const renderScene = BottomNavigation.SceneMap({
    add: AddRouteScreen,
    verify: VerifyRouteScreen,
    search: SearchRouteScreen,
  });

  return (
    <>
      <Header navigation={navigation} />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      />
    </>
  );
};

export default UserDetailsScreen;
