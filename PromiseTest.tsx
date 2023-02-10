/* eslint-disable quotes */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { promiseTest, reqAPI, wait2Seconds, wait2SecondsAsync } from './importPromise';

// import sayHello, { array, user, sayHiToUser } from './importTest';
// import { heroes } from './importTest';

function PromiseTest(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [ test, setTest ] = useState('Loading...');
  const [ test2, setTest2 ] = useState('test');
  const [ users, setUsers ] = useState([]);

  const waitPlease = async (showResolve: any) => {
    try {
      const result = await wait2SecondsAsync(showResolve);
      setTest(`then: ${result}`);
    } catch (error) {
      setTest(`catch: ${error}`);
    }

    try {
      const { data: { data: users2 } } = await reqAPI.get("/users/5");
      // const { avatar } = users2;
      setUsers(users2);
    } catch (error: any) {
      const { message } = error;
      setUsers(message);
    }

    setTest2("Execute after promise");
  };

  useEffect(() => {
    // wait2Seconds(true).
    // then((result: any) => setTest(`then: ${result}`))
    // .catch((error: any) => setTest(`catch: ${error}`));
    waitPlease(true);
  },[]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text style={styles.sectionContainer}>
              {test}
            </Text>
            <Text style={styles.sectionContainer}>
              {test2}
              {/* {JSON.stringify(heroNamesArray, null, 2)} */}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(users, null, 2)}
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 30,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default PromiseTest;
