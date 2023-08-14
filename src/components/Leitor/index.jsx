import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import * as S from './styles'

import "./styles.css";
import { Base } from "../Base";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState < Array < string >> ([]);

  const barcodeScannerComponentHandleUpdate = (error, result) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
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
      <div>
        {logs.map((log) => {

          window.sessionStorage.setItem('trabalho', log)

          window.location.href = '/questao'
        })}
      </div>
    </Base>
  );
}
