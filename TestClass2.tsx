/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React from 'react';
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

// import sayHello, { array, user, sayHiToUser } from './importTest';
import { heroes } from './importTest';

function TestClass2(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Destructuring...

  // const first = array[0];
  // const second = array[1];
  // const third = array[2];

  // const [ a, b, c ] = array;

  // const { name: userName } = user;
  // const { street } = user.address;

  // find, reduce, sort, map...

  // find y filter
  const batman = heroes.find(({hero}) => hero === 'Length');
  const dc = heroes.filter(({company}) => company === 'DC');

  // sort...

  // const sortedHeroes = heroes.sort((hero1, hero2) => {
  //   if ( hero1.company > hero2.company ) return -1;
  //   if ( hero2.company > hero1.company ) return 1;
  //   return 0;
  // });

  // const orderedHeroes = heroes.sort(({company: companyA}, {company: companyB}) => {
  //   if (companyA > companyB) return -1;
  //   if (companyB > companyA) return 1;
  //   return 0;
  // }

  const orderedHeroes = heroes.sort(({company: companyA}, {company: companyB}) => {
    if (companyA > companyB) return 1;
    if (companyB > companyA) return -1;
    return 0;
  });

  // reduce...
  const heroNames = heroes.reduce((previousValue, { name }) => `${previousValue} ${name} `, 'Heroes: ');

  // map...
  // const heroNamesArray = heroes.map(({name}) => name);
  const heroNamesArray = heroes.map(({name, company}) => ({name, company}));

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
              {JSON.stringify(heroNamesArray, null, 2)}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(heroNames, null, 2)}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(orderedHeroes, null, 2)}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(dc, null, 2)}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(batman, null, 2)}
            </Text>
            <Text style={styles.sectionContainer}>
              {JSON.stringify(heroes, null, 2)}
            </Text>

          {/* <Text style={styles.sectionContainer}>
            {a} {b} {c} */}
            {/* {JSON.stringify(user, null, 2)} */}
          {/* </Text> */}
          {/* <Text style={styles.sectionContainer}>
            {sayHiToUser(user)}
          </Text>
          <Text style={styles.sectionContainer}>
            {sayHello()}
          </Text> */}
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

export default TestClass2;
