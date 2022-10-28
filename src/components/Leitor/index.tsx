import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import "./styles.css";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState<Array<string>>([]);

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  return (
    <div className="App">

      {scan && (
        <div>
          <BarcodeScannerComponent
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
    </div>
  );
}
