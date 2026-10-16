import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts } from '../assets/theme/Fonts'

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={{ backgroundColor: '#F2F0F1' }}>
        <View style={{ justifyContent: 'center', margin: 10 }}>
          <Text style={{ fontSize: 36, fontFamily: fonts.semiBold, textAlign: 'left' }}>
            {'FIND CLOTHES\nTHAT MATCHES\nYOUR STYLE'}
          </Text>
          <Text style={{ fontSize: 15, fontFamily: fonts.regular, color: '#00000099', textAlign: 'left' }}>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </Text>
        </View>
        {/*  */}
        <View>
          <TouchableOpacity style={{ backgroundColor: '#000000', padding: 10, borderRadius: 60, margin: 15 }}>
            <Text style={{ color: '#fff', alignSelf: 'center', fontFamily: fonts.medium }}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/*  */}

    </SafeAreaView>
  )
}

export default Home