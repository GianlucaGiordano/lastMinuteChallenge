import { colors } from '@styles/colors.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  flatList: {
    height: 200,
    backgroundColor: colors.WHITE,
  },
  image: {
    width: 220,
    height: 200,
    borderRadius: 18,
    marginRight: 14,
    marginVertical: 12,
  },
  card: {
    backgroundColor: colors.WHITE,
    borderRadius: 18,
    padding: 20,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    width: '100%',
    position: 'relative',
    marginTop: 16,
  },
  ratingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREEN,
    width: 50,
    height: 50,
    borderRadius: '50%',
    top: '-10%',
    right: '6%',
  },
  rating: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: colors.GREY,
  },

  starsText: {
    marginTop: 4,
    fontSize: 15,
  },

  separator: {
    height: 1,
    backgroundColor: colors.DIVIDER,
    marginVertical: 12,
  },
  priceContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.RED,
    marginBottom: 2,
  },
  priceText: {
    fontSize: 14,
    color: colors.GREY,
  },
  checkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  checkLabel: {
    fontSize: 13,
    color: colors.GREY,
    marginBottom: 2,
  },
  checkValue: {
    fontSize: 15,
    color: colors.BLACK,
    fontWeight: '500',
  },
  contactContainer: { marginBottom: 12, marginTop: 8 },
  contactTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 8 },
  contactText: { fontSize: 16 },
  contactLink: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
