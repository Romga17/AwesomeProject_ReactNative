import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TimeComponent from './TimeComponent';

const ListHeader = () => {

  const [showTime, setShowTime] = useState(false);
      
  const handleButtonPress = () => {
    setShowTime(!showTime);
  };

  return (
    <View>
      <Text style={{ fontSize: 42, color: 'orange', margin: 'auto' }}>Website checker</Text>

    <Button
        title={showTime ? 'Masquer l\'heure' : 'Afficher l\'heure'}
        onPress={handleButtonPress} />
    
    {showTime && <TimeComponent/>}

    </View>
  );

};

export default ListHeader;