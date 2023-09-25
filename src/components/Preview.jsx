import '../styles/Preview.css'
import { Document, pdfjs, Page  } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


 function Preview({resumeInstance}){
    if (resumeInstance.loading) return <div>Loading ...</div>;

    if (resumeInstance.error) return <div>Something went wrong: {error}</div>;
    const test = resumeInstance
    console.log(test)
    return (
      <div id='pdf-container'>
        <Document file={resumeInstance.url}>
          <Page size="A4" pageNumber={1} className='pdf'   />
        </Document>
      </div>
    );
}



export default Preview