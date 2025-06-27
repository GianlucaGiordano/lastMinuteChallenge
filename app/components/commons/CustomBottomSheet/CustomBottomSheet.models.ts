import BottomSheet from '@gorhom/bottom-sheet';
import { SharedValue } from 'react-native-reanimated';

export interface CustomBottomSheetProps {
  ref: React.RefObject<BottomSheet | null>;
  children: React.ReactNode;
  expandPoints?: (string | number)[] | SharedValue<(string | number)[]>;
}
