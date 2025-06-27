import { View } from 'react-native';
import React from 'react';
import HotelsList from '@components/HotelsList/HotelsList';

const Homepage = () => {
  return (
    <View style={{ flex: 1 }}>
      <HotelsList />
    </View>
  );
};

export default Homepage;
