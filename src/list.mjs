export const EMPTY_STATE = '項目はありません'
export const FAILED_STATE = '読み込めませんでした'

export const View = ({ items }) => items.map((item) => `<li>${item}</li>`).join('')
