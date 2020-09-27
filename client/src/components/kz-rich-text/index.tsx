import React from 'react'
import { View } from '@tarojs/components'
import { parse } from './himalaya/index'
import { KzNode } from './utils'
import KzElementP from './p'
import KzElementImg from './img'
import KzElementSpan from './span'

const KzNodes: React.FC<{
  nodes?: KzNode[]
}> = ({
  nodes
}) => {
  return nodes?.map(node => {

    if (node.type === 'text') {
      return node.content
    }

    // todo 看看怎么把 RichText 用上
    if (node.tagName === 'p' || node.tagName === 'section') {
      return (
        <KzElementP node={node}>
          <KzNodes nodes={node.children} />
        </KzElementP>
      )
    }

    if (node.tagName === 'span') {
      return (
        <KzElementSpan node={node}>
          <KzNodes nodes={node.children} />
        </KzElementSpan>
      )
    }


    if (node.tagName === 'img') {
      return (
        <KzElementImg node={node} />
      )
    }

    return (
      <View>PAGE ERROR !!!</View>
    )
  })
}

const KzRichText: React.FC<{
  html: string
}> = ({
  html
}) => {
  const nodes = parse(html)
  console.log(nodes)
  return <KzNodes nodes={nodes} />
}

export default KzRichText