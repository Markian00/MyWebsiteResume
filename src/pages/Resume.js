import React from "react"
import { PDFViewer, Document, Page } from '@react-pdf/renderer';

const pdf = {
    width: "100%",
    height: "100vh",
    border: "1px solid black"
}
const Resume = () => {
    const pdfURL = 'https://markianresume2024-553360963633.s3-accesspoint.us-east-2.amazonaws.com/Markian_Voronovych_Resume_2024.pdf';

    return (
        <iframe style={pdf} src="https://markianresume.s3.us-east-2.amazonaws.com/Markian_Voronovych_Resume_2024.pdf" title="Mark's Resume"></iframe>
    );
};


export default Resume

//CODE BY MARKIAN VORONOVYCH 2023