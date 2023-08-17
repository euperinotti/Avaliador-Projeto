import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useEffect, useState } from "react";
import { Base } from "../components/Base";
import { Heading } from "../components/Heading";
import { useNavigate } from "react-router-dom";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState([]);
  const navigate = useNavigate();

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
      <Heading>Aponte a câmera para o QrCode</Heading>
      {scan && (
          <BarcodeScannerComponent
            onUpdate={handleUpdate}
          />
      )}
      <div>
        {logs.map((log) => {
          window.sessionStorage.setItem('trabalho', log)
          navigate('/questao')
        })}
      </div>
    </Base>
  );
}