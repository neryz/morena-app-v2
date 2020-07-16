import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Material Components
import {
  Avatar,
  ActivityIndicator,
  Headline,
  Caption,
  Paragraph,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ user, rating }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
      }}
    >
      <View style={{ flex: 1 }}>
        {user ? (
          <Avatar.Image
            style={{ marginTop: 30 }}
            size={120}
            source={{
              uri: `https://ui-avatars.com/api/?name=${user.firstName}&background=0D8ABC&color=fff`,
            }}
          />
        ) : (
          <ActivityIndicator style={{ marginRight: 10 }} />
        )}
      </View>
      <View style={{ marginTop: 160, alignItems: 'center' }}>
        {user && (
          <>
            <Headline>{`${user.firstName} ${user.lastName}`}</Headline>
            <Paragraph>{user.emailAddress}</Paragraph>
            <Caption style={{ marginTop: -4 }}>Distrito 25</Caption>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Paragraph
                style={{ marginTop: 12, marginRight: 10, color: '#FFB23F' }}
              >
                4.5
              </Paragraph>
              {[1, 2, 3, 4, 5].map((element) => {
                const limit = Math.floor(rating / 2 + 1);

                if (element < limit) {
                  return (
                    <Icon
                      name="star"
                      size={22}
                      color="#FFB23F"
                      style={{ marginTop: 10, marginHorizontal: 2 }}
                    />
                  );
                } else if (element < limit + 1 && rating % 2) {
                  return (
                    <Icon
                      name="star-half-empty"
                      size={22}
                      color="#FFB23F"
                      style={{ marginTop: 10, marginHorizontal: 2 }}
                    />
                  );
                } else {
                  return (
                    <Icon
                      name="star-o"
                      size={22}
                      color="#FFB23F"
                      style={{ marginTop: 10, marginLeft: 2 }}
                    />
                  );
                }
              })}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    emailAddress: PropTypes.string,
  }),
  rating: PropTypes.number,
};

export default Profile;
