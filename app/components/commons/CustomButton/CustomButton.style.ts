import { colors } from '@styles/colors.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderColor: colors.BUTTON,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  buttonActive: {
    backgroundColor: colors.BUTTON,
  },
  text: { color: colors.BUTTON, fontWeight: 'bold', fontSize: 16 },
  textActive: { color: 'white' },
});
