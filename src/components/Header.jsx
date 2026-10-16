import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts } from '../assets/theme/Fonts'

const Header = () => {
  return (
    <View>
      <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', margin: 15 }}>
          <Ionicons name='menu' size={24} style={{ alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontFamily: fonts.medium, marginLeft: 10 }}>SHOP.CO</Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 15 }}>
          <Ionicons name='search' size={24} style={{ paddingLeft: 10 }} />
          <Ionicons name='cart-outline' size={24} style={{ paddingLeft: 10 }} />
          <Ionicons name='person-outline' size={24} style={{ paddingLeft: 10 }} />
        </View>
      </View>
      {/*  */}
      
    </View>
  )
}

export default Header