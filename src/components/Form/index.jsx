import * as S from './styled';

export const Form = (props) => {

  return (
    <S.Form onSubmit={props.onSubmit}>
      <S.Fields>
        {props.children}
      </S.Fields>
    </S.Form>
  )
};