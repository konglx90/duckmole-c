import React from 'react'
import { View, RichText } from '@tarojs/components'
import { parse } from './himalaya/index'
import { KzNode, extractAttr } from './utils'
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

    // todo 看看怎么把 RichText 用上, 和 himalaya 解析出来的格式不太一样
    if (
      node.tagName === 'p' ||
      node.tagName === 'section' ||
      node.tagName === 'h3'
    ) {
      return (
        <KzElementP node={node}>
          <KzNodes nodes={node.children} />
          {/* <RichText node={node.children} /> */}
        </KzElementP>
      )
    }

    if (node.tagName === 'span' || node.tagName === 'strong') {
      return (
        <KzElementSpan node={node}>
          <KzNodes nodes={node.children} />
        </KzElementSpan>
      )
    }

    // todo
    if (node.tagName === 'br') {
      return (
        <View style={{ height: '10px' }}></View>
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

  function traverse(nodes?: KzNode[]) {
    nodes?.forEach(node => {
      if (node.type === 'element') {
        // @ts-ignore
        node.name = node.tagName
        // @ts-ignore
        node.attrs = extractAttr(node.attributes)
        traverse(node.children)
        return
      }

      // @ts-ignore
      node.text = node.content
    })
  }

  traverse(nodes)
  console.log(nodes)

  return <KzNodes nodes={nodes} />
}

export default KzRichText