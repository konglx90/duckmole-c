import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import getCloud from "../../lib/cloud";
import './index.less'

import { Page } from '../../components/page';

export default class Index extends Component<{}, {
  pageContent: string
}> {

  state = {
    pageContent: ''
  }

  componentWillMount () { }

  async componentDidMount () {
    const cloud = await getCloud();

    const res = await cloud.callFunction({
      name: "pages-api",
      data: {
        type: 'common',
        perPage: 10,
        page: 1
      }
    });

    this.setState({
      pageContent: res.result.data[0].content
    })

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Page pageContent={this.state.pageContent && JSON.parse(this.state.pageContent)} />
      </View>
    )
  }
}
