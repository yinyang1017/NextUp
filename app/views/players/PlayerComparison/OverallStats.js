import {View, Text, StyleSheet} from 'react-native';
import {Layout} from '../../../constants';
import SideBySideBarGraph from '../../../components/common/SideBySideBar';
const wide = Layout.width;
export default function OverallStats() {
  return (
    <View>
      <Text>Overall Stats</Text>
      <View style={styles.graphContainer}>
        <SideBySideBarGraph
          pgsData={[
            {name: 'PST', value: [12.7, null]},
            {name: 'AST', value: [7.7, 8.7]},
            {name: 'RPG', value: [10.9, 11.9]},
            {name: 'BPG', value: [12.7, 10.7]},
            {name: 'STL', value: [7.7, 8.7]},
            {name: 'FG%', value: [10.9, 11.9]},
            {name: '2PT', value: [7.7, 8.7]},
            {name: '3PT', value: [10.9, 11.9]},
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: wide * 0.05,
    marginBottom: wide * 0.06,
  },
});
