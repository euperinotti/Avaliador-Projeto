import { useEffect, useState } from 'react';
import { Button } from '../Botao'
import * as S from './styles'
import { Heading } from '../Heading';

export const PopUp = ({ onClose, children, title, display }) => {

  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    onClose(false);
  };

  useEffect(() => {
    setShow(display);
  }, [display]);

  return (
    <S.Overlay show={show}>
      <S.Popup>
        <Heading>{title}</Heading>
        <S.Close onClick={closeHandler}>&times;</S.Close>
        <S.Content>{children}</S.Content>
      </S.Popup>
    </S.Overlay>
  )
}