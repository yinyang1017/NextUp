import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
export default function RosterTab() {
  const [data, setData] = useState([1, 2, 3]);

  const addData = () => {
    setData([...data, data.length + 1]);
  };

  return (
    <View>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <Button title="Add data" onPress={addData} />
    </View>
  );
}
