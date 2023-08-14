import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import * as S from './styles'

import { Base } from "../Base";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState("");

  const barcodeScannerComponentHandleUpdate = (error, result) => {
    if (result) {
      setLog(result.text);
      setScan(false);

      window.sessionStorage.setItem('trabalho', logs)

          window.location.href = '/questao'
    }
  };
  useEffect(() => {
    if (window.sessionStorage.getItem('id') === null || window.sessionStorage.getItem('acesso') != 'avaliador') {
      window.location.href = '/'
    }
  });

  return (
    <Base>
      {scan && (
        <div>
          <BarcodeScannerComponent
           width={500}
           height={500}
            onUpdate={barcodeScannerComponentHandleUpdate}
          />
        </div>
      )}
    </Base>
  );
}
