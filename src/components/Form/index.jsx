import { Logo } from '../Logo';
import * as S from './styled';

const Form = (props) => {

  return (
    <S.Form onSubmit={props.onSubmit}>
      <S.Fields>
        {props.children}
      </S.Fields>
    </S.Form>
  )
};

export default Form;