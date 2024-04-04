import { View } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';

import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listings';

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');

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
      <Listing listing={[]} category={category} />
    </View>
  );
};

export default Page;
