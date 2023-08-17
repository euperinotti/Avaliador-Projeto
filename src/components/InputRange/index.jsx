import * as S from './styles'

export const InputRange = ({ label, value, onChange }) => {
  return (
    <S.Input
      min={0}
      max={10}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}