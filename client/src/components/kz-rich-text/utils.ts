
/**
 * 转换key value的存储形式，并且提取出需要的参数
 * @param attributes [{ key: 'class', value:  'duck' }]
 * @param keyOrKeys ['class'] 或者 'class'
 * 
 * @returns { class: 'duck' }
 */
export const extractAttr = (attributes, keyOrKeys: string | string[]) => {
  const keys = typeof keyOrKeys === 'string' ? [keyOrKeys] : keyOrKeys
  const isAll = typeof keyOrKeys === 'undefined';

  return attributes?.reduce((acc, cur) => {
    return isAll || keys.indexOf(cur.key) > -1 ? { ...acc, [cur.key]: cur.value} : acc
  }, {})
}

export interface KzNode {
  tagName?: 'p' | 'img' | 'span' | 'section' | 'strong'
  type: 'element' | 'text'
  children?: KzNode[]
  content?: string
  attributes?: { key: string, value: string }[]
}