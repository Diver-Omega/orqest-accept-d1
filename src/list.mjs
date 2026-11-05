export const EMPTY_STATE = '項目はありません'
export const FAILED_STATE = '読み込めませんでした'

export const View = ({ ok, items }) => {
  if (ok === false) return FAILED_STATE
  if (items.length === 0) return EMPTY_STATE
  return items.map((item) => `<li>${item}</li>`).join('')
}
