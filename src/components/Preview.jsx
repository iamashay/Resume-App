import '../styles/Preview.css'
import { Document, pdfjs, Page  } from 'react-pdf'
import {BlobProvider} from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Resume from './Resume'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


 function Preview({resume}){
    return <BlobProvider document={<Resume resume={resume} />}>
    {({ blob, url, loading, error }) => {
      // Do whatever you need with blob here

      return (
        <div id='pdf-container'>
          <Document file={url}>
            <Page size="A4" pageNumber={1} className='pdf'   />
          </Document>
        </div>
      );
    }}
  </BlobProvider>

}



export default Preview