import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Link href={'/(models)/login'}>Login</Link>
      <Link href={'/(models)/booking'}>Booking</Link>
      <Link href={'/listing/1337'}>Lisitng</Link>
    </View>
  );
};

export default Page;
