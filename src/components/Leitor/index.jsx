import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const LeitorQr = () => {

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