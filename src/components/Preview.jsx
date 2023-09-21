import '../styles/Preview.css'
import { usePDF } from '@react-pdf/renderer';
import { Document, pdfjs, Page  } from 'react-pdf'
import Resume from './Resume';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


 function Preview({data}){
    const [instance, updateInstance] = usePDF({ document: Resume({data}) });
    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;
    const test = instance
    console.log(test)
    return (
      <div id='pdf-container'>
        <Document file={instance.url}>
          <Page size="A4" pageNumber={1} className='pdf'   />
        </Document>
      </div>
    );
}



export default Preview