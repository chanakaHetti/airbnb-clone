import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';

import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listings';
import listinData from '@/assets/data/airbnb-listings.json';
import { Listing as ListingInterface } from '@/interfaces/listing';

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items = useMemo(() => listinData as ListingInterface[], []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      {/* <Link href={'/(models)/login'}>Login</Link>
      <Link href={'/(models)/booking'}>Booking</Link>
      <Link href={'/listing/1337'}>Lisitng</Link> */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listing listing={items} category={category} />
    </View>
  );
};

export default Page;
