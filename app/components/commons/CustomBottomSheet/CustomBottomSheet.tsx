import React, { useCallback } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { CustomBottomSheetProps } from './CustomBottomSheet.models';
import { styles } from './CustomBottomSheet.style';

const CustomBottomSheet = ({
  ref,
  children,
  expandPoints = ['80%'],
}: CustomBottomSheetProps) => {
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    [],
  );

  // render

  return (
    <BottomSheet
      style={styles.container}
      ref={ref}
      index={-1}
      snapPoints={expandPoints}
      enableDynamicSizing={false}
      enablePanDownToClose={false}
      enableContentPanningGesture={false}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
