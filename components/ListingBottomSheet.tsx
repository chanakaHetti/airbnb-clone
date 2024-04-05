import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Listing as ListingInterface } from '@/interfaces/listing';
import Listings from './Listings';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  listings: ListingInterface[];
  category: string;
}

const ListingBottomSheet = memo(({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  const [refresh, setRefresh] = useState(0);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet
        // index={1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ backgroundColor: Colors.grey }}
        style={styles.sheetContainer}
      >
        <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Listings
              listing={listings}
              category={category}
              refresh={refresh}
            />
            <View style={styles.absoluteBtn}>
              <TouchableOpacity onPress={showMap} style={styles.btn}>
                <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
                <Ionicons name="map" size={20} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  absoluteBtn: {
    position: 'absolute',
    bottom: 30,
    left: -15,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // Shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingBottomSheet;
