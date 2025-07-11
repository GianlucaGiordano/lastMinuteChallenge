import { View, Text, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { HotelDetailProps } from './HotelDetail.models';
import { styles } from './HotelDetail.style';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <BottomSheetFlatList
        showsHorizontalScrollIndicator={false}
        data={hotel.gallery}
        horizontal
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={
              error
                ? require('@assets/images/placeholderImage.png')
                : { uri: item }
            }
            style={styles.image}
            resizeMode="contain"
            onError={() => setError(true)}
          />
        )}
        style={styles.flatList}
      />

      <View style={styles.card}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{hotel.userRating}</Text>
        </View>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.location}>
          {hotel.location.address}, {hotel.location.city}
        </Text>
        <Text style={styles.starsText}>{'⭐'.repeat(hotel.stars)}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {hotel.price} {hotel.currency.toLowerCase()}
          </Text>
          <Text style={styles.priceText}>/ notte</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.checkRow}>
          <View>
            <Text style={styles.checkLabel}>Check-in</Text>
            <Text style={styles.checkValue}>
              {hotel.checkIn.from} - {hotel.checkIn.to}
            </Text>
          </View>
          <View>
            <Text style={styles.checkLabel}>Check-out</Text>
            <Text style={styles.checkValue}>
              {hotel.checkOut.from} - {hotel.checkOut.to}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contatti</Text>
          <Text style={styles.contactText}>
            Telefono: {hotel.contact.phoneNumber}
          </Text>
          <Text style={styles.contactText}>Email: {hotel.contact.email}</Text>
          <Text
            style={styles.contactLink}
            onPress={() => {
              Linking.openURL(
                `https://maps.google.com/?q=${hotel.location.latitude},${hotel.location.longitude}`,
              );
            }}
          >
            {hotel.location.address}, {hotel.location.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HotelDetail;
