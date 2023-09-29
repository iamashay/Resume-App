import '../styles/Preview.css'
import { Document, pdfjs, Page  } from 'react-pdf'
import {usePDF} from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Resume from './Resume'
import { useEffect } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Preview({resume}){
  const [instance, updateInstance] = usePDF({ document: <Resume resume={resume} /> });
  useEffect(()=> {
    console.log('Instance updated: ', instance)
    updateInstance(<Resume resume={resume} />)
  }, [resume])

  if (instance.loading) return <div id='pdf-container'>Loading ...</div>;

  if (instance.error) return <div id='pdf-container'>Something went wrong: {error}</div>;

  return (
    <div id='pdf-container'>
      <div className='pdf-options'>
        <div className='download'></div>
      </div>
      <Document file={instance.url}>
        <Page size="A4" pageNumber={1} className='pdf'   />
      </Document>
    </div>
  );
  
}

export default Preview