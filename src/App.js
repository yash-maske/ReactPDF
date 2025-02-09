import {PDFViewer} from '@react-pdf/renderer'
import Template from './components/Template'
function App() {
  return (
    <>
    <PDFViewer style={{width:'100%',height : '100vh'}}>

    <Template/>
    </PDFViewer>
    </>
  );
}

export default App;
