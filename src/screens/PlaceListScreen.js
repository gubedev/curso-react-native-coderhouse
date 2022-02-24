import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = ({navigation}) => {
  const places = useSelector(state => state.places.places);

  const onSelectDetail = () => {
    navigation.navigate('Detalle');
  };

  const renderItem = ({item}) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      address={item.address}
      onSelect={onSelectDetail}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceListScreen;
