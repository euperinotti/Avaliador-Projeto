import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import { auth, AuthPopup } from "../auth";
import { Base } from "../components/Base";
import { Heading } from "../components/Heading";

export default function Leitor() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState([]);
  const navigate = useNavigate();
  const authUser = auth()

  const handleUpdate = (error, result) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  return (
    <Base>
      {!authUser.status && (<AuthPopup message={authUser.message} />)}
      <Heading>Aponte a câmera para o QrCode</Heading>
      {scan && (
        <BarcodeScannerComponent
          onUpdate={handleUpdate}
        />
      )}
      <div>
        {logs.map((log) => {
          window.sessionStorage.setItem('trabalho', log)
          navigate('/avaliacao-projeto')
        })}
      </div>
    </Base>
  );
}