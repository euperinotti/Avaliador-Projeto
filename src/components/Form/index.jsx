import { Logo } from '../Logo';
import * as S from './styled';

const Form = (props) => {

  return (
    <S.Form onSubmit={props.onSubmit}>
      <Logo />
      {props.children}
    </S.Form>
  )
};

export default Form;