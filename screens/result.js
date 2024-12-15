import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
              <Image source={require ('../components/quiz.png')} 
                style={styles.banner}
                resizeMode='contain'
                />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>
              Home
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({banner:{
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },});