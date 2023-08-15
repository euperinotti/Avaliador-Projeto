import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState([]);

  useEffect(() => {
    if (window.sessionStorage.getItem('id') === null && window.sessionStorage.getItem('id') === null) {
      window.location.href = '/'
    }
  });

  const handleUpdate = (error, result) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  return (
    <Base>
      {scan && (
        <div>
          <BarcodeScannerComponent
            onUpdate={handleUpdate}
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