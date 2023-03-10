import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/CV_Fe_Le_Xuan_Tung.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/kikuchanj1806/portfolio/main/src/Assets/CV_Fe_Le_Xuan_Tung.pdf";

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    return (
        <div>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center resume_flex">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                        <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;