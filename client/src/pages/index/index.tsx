import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import getCloud from "../../lib/cloud";
import './index.less'

import { Page } from '../../components/page';
import KzRichText from '../../components/kz-rich-text';
import { HARD_HTML } from './hard-html';

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
        {/* <Page pageContent={this.state.pageContent && JSON.parse(this.state.pageContent)} /> */}

        <KzRichText html={`<p>duck</p>`} />
        <KzRichText html={`<p style="color: yellow;">yellow duck</p>`} />
        <KzRichText html={`<p>duck<p>inner duck</p></p>`} />

        <KzRichText html={`<img src="//cdn.kuaizhan.com/kz-homepages/static/media/banner-anniversary.477b9752.png" />`} />

        <KzRichText html={HARD_HTML} />
      </View>
    )
  }
}
