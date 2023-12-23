import React from "react"
import { PDFViewer, Document, Page } from '@react-pdf/renderer';

const Resume = () => {
    const pdfURL = process.env.PUBLIC_URL + '/resume.pdf';
    return (
        <PDFViewer style={{ width: '100%', height: '100vh', border: '1px solid black' }}>
            <Document file='https://github.com/Markian00/MyWebsiteResume/blob/88dc77c1e1dd5fcde40c4ff5b0f8faa5ce7ef3ac/public/resume.pdf'>
                <Page pageNumber={1} />
            </Document>
        </PDFViewer>
    )
}


export default Resume

//CODE BY MARKIAN VORONOVYCH 2023