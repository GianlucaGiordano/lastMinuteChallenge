import { colors } from '@styles/colors.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    flexDirection: 'row',
  },
  image: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,

    width: 100,
  },
  info: {
    padding: 12,

    flex: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,

    marginBottom: 4,
  },
  starPriceContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  stars: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
