import CustomBottomSheet from '@components/commons/CustomBottomSheet/CustomBottomSheet';
import CustomButton from '@components/commons/CustomButton/CustomButton';
import BottomSheet from '@gorhom/bottom-sheet';
import { GetHotelsResponse } from '@interfaces/getHotelsResponse.interface';
import { useState, useRef, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import HotelCard from './components/HotelCard/HotelCard';
import { styles } from './HotelsList.style';
import HotelDetail from './components/HotelDetail/HotelDetail';

const url = 'https://technology.lastminute.com/api/hotel.json';
const HotelsList = () => {
  const [hotelsData, setHotelsData] = useState<GetHotelsResponse[]>();
  const [originalHotelsData, setOriginalHotelsData] = useState<
    GetHotelsResponse[]
  >(hotelsData ?? []);
  const [isSortAsc, setIsSortAsc] = useState<boolean | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<GetHotelsResponse>();
  const sheetRef = useRef<BottomSheet>(null);
  const arrowHandler = () => (isSortAsc === null ? '' : isSortAsc ? '↑' : '↓');
  const [fetchError, setFetchError] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setHotelsData(data);
      setOriginalHotelsData(data);
    } catch (error) {
      console.error('Errore durante il fetch:', error);
      setFetchError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const sortHandler = () => {
    if (!hotelsData) return;
    const sorted = [...originalHotelsData].sort((a, b) =>
      isSortAsc ? b.price - a.price : a.price - b.price,
    );
    setHotelsData(sorted);
    setIsSortAsc(!isSortAsc);
  };

  const onCardPressHandler = (hotel: GetHotelsResponse) => {
    setSelectedHotel(hotel);
    sheetRef.current?.expand();
  };
  if (fetchError) {
    return (
      <View>
        <Text>fetch Error</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton
          text={`Sort ${arrowHandler()}`}
          onPress={() => sortHandler()}
          active={isSortAsc !== null}
        />
      </View>
      <FlatList
        data={hotelsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <HotelCard hotel={item} onPress={onCardPressHandler} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <CustomBottomSheet ref={sheetRef}>
        {selectedHotel && (
          <HotelDetail hotel={selectedHotel as GetHotelsResponse} />
        )}
      </CustomBottomSheet>
    </View>
  );
};

export default HotelsList;
