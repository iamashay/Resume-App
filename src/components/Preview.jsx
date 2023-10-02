import '../styles/Preview.css'
import { Document, pdfjs, Page  } from 'react-pdf'
import {usePDF} from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Resume from './Resume'
import { useEffect } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Preview({instance}){

  if (instance.loading) return <div className='pdf-container'>Loading ...</div>;

  if (instance.error) return <div className='pdf-container'>Something went wrong: {error}</div>;

  return (
    <div className='pdf-container'>
      <Document file={instance.url}>
        <Page size="A4" pageNumber={1} className='pdf'   />
      </Document>
    </div>
  );
  
}

export default Preview