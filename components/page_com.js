import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Component01 from '../component/component01'
import Component02 from '../component/component02'
import Component03 from '../component/component03'

export default class page_com extends Component {
  render() {
    return (
      <View>
        <Component01/>
        <Component02/>
        <Component03/>
      </View>
    )
  }
}
