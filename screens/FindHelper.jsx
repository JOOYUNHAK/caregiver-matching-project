/* 가게 홍보 리스트가 있는 페이지 */

import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import { MyTopTabs } from '../navigations/TopTabNavigator';

export default function FindHelper({ navigation }) {

  const [loading, setLoading] = useState(true);
  /* useEffect(() => {
    async function getProfileList() {
      if(await requestProfileList())
        setLoading(false);
    };
    getProfileList();
  }, [])  */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
        <MyTopTabs />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'white',
  },
});
