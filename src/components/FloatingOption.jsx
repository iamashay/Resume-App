import '../styles/FloatingOption.css'
import downloadIcon from '../assets/download.png'
import liveIcon from '../assets/eye.png'
import '../styles/FloatingOption.css'

function togglePreview() {
    const pdfContainer = document.querySelector('.pdf-container')
    const previewButton = document.querySelector('.live-preview')
    if (pdfContainer.classList.contains('hide-pdf')){ 
        pdfContainer.classList.remove('hide-pdf')
        previewButton.classList.remove('preview-inactive')
    } else {
        pdfContainer.classList.add('hide-pdf')
        previewButton.classList.add('preview-inactive')
    }
}

export default function FloatingOption({instance, name}) {
    return <div className='floating-option'>
        <span className="live-preview"><img src={liveIcon} onClick={togglePreview} title='Live Preview PDF' alt='live preview pdf'></img></span>
        <span className='download'><a href={instance.url} download={name+' Resume.pdf'}><img src={downloadIcon} title='Download PDF' alt='download pdf'></img></a></span>
    </div>
    
}