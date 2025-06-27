import { View, Text, FlatList, Image, Linking } from 'react-native';
import React from 'react';
import { HotelDetailProps } from './HotelDetail.models';
import { styles } from './HotelDetail.style';

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hotel.gallery}
        horizontal
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        showsHorizontalScrollIndicator={false}
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
