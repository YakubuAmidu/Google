// import React from 'react';
// import { withNavigation, } from 'react-navigation';
// import Video from 'react-native-video';
// import { Text, View, ScrollView, StyleSheet, Image, Button, TextInput, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
//
//
// const HomeScreen = ({ navigation }) => {
//     const { viewStyle, searchStyle, textInputStyle, textStyle, viewStyle2 } = styles;
//
//   return (
//      <ScrollView>
//       <View style={viewStyle}>
//       <AntDesign style={searchStyle} name="search1"/>
//       <TextInput style={textInputStyle} placeholder="Search" />
//       </View>
//       </ScrollView>
//   );
//
//       };
//
// const styles = {
//     viewStyle: {
//         flexDirection: 'row',
//         backgroundColor: '#999',
//         paddingTop: 5,
//         paddingBottom: 5,
//         top: 5,
//         marginLeft: 5,
//         marginRight: 5,
//         shadowOffset: { width: 0, height: 2},
//         shadowOpacity: 2,
//         shadowColor: '#000'
//     },
//     searchStyle: {
//         fontSize: 20,
//         marginLeft: 5,
//         color: 'red'
//     },
//     textInputStyle: {
//      marginLeft: 5,
//      fontSize: 18
//     },
//     viewStyle2: {
//     top: 10,
//     backgroundColor: '#fff',
//     height: 150,
//     marginLeft: 5,
//     marginRight: 5,
//     shadowColor: '#000',
//     shadowOpacity: 2,
//     shadowOffset: { width: 2, height: 2}
//     },
//     textStyle: {
//      top: 5,
//      textAlign: 'center',
//      fontSize: 16,
//      marginLeft: 5,
//      marginRight: 5,
//      color: '#000'
//     }
// };
//
// export default withNavigation(HomeScreen);


import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default class Google extends Component {
  render() {
    return (
      <ScrollView>
      <View>
       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
       <Text style={{ fontSize: 20, color: 'blue', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>G</Text>
        <Text style={{ fontSize: 20, color: 'red', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>o</Text>
         <Text style={{ fontSize: 20, color: 'gold', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>o</Text>
          <Text style={{ fontSize: 20, color: 'blue', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>g</Text>
           <Text style={{ fontSize: 20, color: 'green', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>l</Text>
            <Text style={{ fontSize: 20, color: 'red', marginTop: 30, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}>e</Text>
            </View>
       <View>
       <TextInput style={styles.textInputStyle}>
       <FontAwesome name="microphone" size={24} color="red" />
       </TextInput>
       </View>

       <View style={styles.viewStyle1}>
       <Text style={styles.textStyle2}>Google Search</Text>
       <Text style={styles.textStyle2}>I'm Feeling Lucky</Text>
       </View>

     <View style={styles.viewStyle2}>
       <Text style={styles.textStyle3}>We're updating Google.</Text>
       <Text style={styles.textStyle4}>Learn more</Text>
    </View>

       </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  textStyle1: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 20,
    color: '#808080'
  },
  textInputStyle: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    textAlign: 'right',
  },
  viewStyle1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  textStyle2: {
    backgroundColor: '#DFDFDF',
    color: '#808080',
    fontWeight: 'bold',
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 20
  },
  textStyle3: {
    color: '#808080',
    fontWeight: 'bold'
  },
  viewStyle2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle4: {
    color: 'blue',
    marginLeft: 5
  }
})
