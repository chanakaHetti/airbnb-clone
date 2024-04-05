import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';

import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listinData from '@/assets/data/airbnb-listings.json';
import listinDataGeo from '@/assets/data/airbnb-listings.geo.json';
import { Listing as ListingInterface } from '@/interfaces/listing';
import ListingMap from '@/components/ListingMap';
import ListingBottomSheet from '@/components/ListingBottomSheet';

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items = useMemo(() => listinData as ListingInterface[], []);
  const itemsGeo = useMemo(() => listinDataGeo as ListingInterface[], []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingMap listings={itemsGeo} />
      <ListingBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
