import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';




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
