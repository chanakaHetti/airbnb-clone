import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '@/interfaces/listing-geo';
import { useRouter } from 'expo-router';
import MapView from 'react-native-map-clustering';

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 52.52,
  longitude: 13.405,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingMap = ({ listings }: Props) => {
  const router = useRouter();
  const onMarkerSelector = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluser = (cluser: any) => {
    const { id, geometry, onPress, properties } = cluser;
    const points = properties.point_count;

    return (
      <Marker
        key={`cluser-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'mon-sb',
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        renderCluster={renderCluser}
      >
        {listings.features.map((item: ListingGeo) => (
          <Marker
            key={item.properties.id}
            onPress={() => onMarkerSelector(item)}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>$ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 6,
    // Shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
  },
});

export default ListingMap;
