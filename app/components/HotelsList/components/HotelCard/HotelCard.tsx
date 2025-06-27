import React, { useState } from 'react';
import { Pressable, Image, View, Text } from 'react-native';
import { styles } from './HotelCard.style';
import { HotelCardProps } from './HotelCard.models';

const star = `⭐`;
const HotelCard = ({ hotel, onPress }: HotelCardProps) => {
  const [error, setError] = useState(false);

  return (
    <>
      <Pressable style={styles.card} onPress={() => onPress(hotel)}>
        <Image
          source={
            error
              ? require('@assets/images/placeholderImage.png')
              : { uri: hotel.gallery[0] }
          }
          style={styles.image}
          onError={() => setError(true)}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{hotel.name}</Text>
          <Text style={styles.description}>
            {hotel.location.address}, {hotel.location.city}
          </Text>
          <View style={styles.starPriceContainer}>
            <Text style={styles.stars}>{star.repeat(hotel.stars)}</Text>
            <Text style={styles.price}>
              {hotel.price} {hotel.currency}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default HotelCard;
