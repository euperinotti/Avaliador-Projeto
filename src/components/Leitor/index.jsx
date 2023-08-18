import BarcodeScannerComponent from "react-qr-barcode-scanner";
import * as S from  './styles'

export const Leitor = () => {

  const handleUpdate = (error, result) => {
    try {
      if (result) {
        setLog([...logs, result.text]);
        setScan(false);
      }
    } catch (e) {
      console.log(error)
    }
  };

  return (
    <BarcodeScannerComponent
      onUpdate={handleUpdate}
    />
  )
}