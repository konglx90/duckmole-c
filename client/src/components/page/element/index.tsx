import React from 'react'
import { Text } from '@tarojs/components'

const addStyle = 
  (rootStyle, judge, key, value) => {
    if (judge) {
      rootStyle[key] = value
    }
  }

const Element: React.FC<{
  text: string
  color?: string
  italic?: boolean
  underline?: boolean
  bold?: boolean
  strikethrough?: boolean
}> = ({
  text,
  color,
  italic,
  underline,
  bold,
  strikethrough
}) => {
  const rootStyle = {}
  addStyle(rootStyle, true, 'color', color);
  addStyle(rootStyle, italic, 'fontStyle', 'italic');
  addStyle(rootStyle, bold, 'fontWeight', 'bold')
  addStyle(rootStyle, strikethrough, 'textDecoration', 'line-through')

  const underlineStyle = {}
  addStyle(underlineStyle, underline, 'textDecoration', 'underline')

  return (
    <Text style={rootStyle}>
      {underline ? (
        <Text style={underlineStyle}>
          {text}
        </Text>
      ): text
      }
    </Text>
  )
}

export {
  Element
}