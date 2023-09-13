import '../styles/Preview.css'
import { usePDF } from '@react-pdf/renderer';
import { Document, pdfjs, Page  } from 'react-pdf'
import Resume from './Resume';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Preview({data}){
    const [instance, updateInstance] = usePDF({ document: Resume({data}) });
    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;
    console.log(instance)
    return (
      <>
      <Document file={instance.url}>
        <Page pageNumber={1}  />
      </Document>
      <a href={instance.url}>Download</a>
      </>
    );
}



export default Preview