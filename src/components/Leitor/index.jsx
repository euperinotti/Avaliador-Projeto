import BarcodeScannerComponent from "react-qr-barcode-scanner";
import * as S from  './styles'

export const Leitor = () => {

  const handleUpdate = (error, result) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  return (
    <BarcodeScannerComponent
      onUpdate={handleUpdate}
    />
  )
}