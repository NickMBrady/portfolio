// PdfViewer.js
import 'react';
import PropTypes from 'prop-types';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfViewer({ fileUrl }) {
    // Initialize the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '80vh' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[defaultLayoutPluginInstance]}
                    theme="dark"
                />
            </Worker>
        </div>
    );
}
PdfViewer.propTypes = {
    fileUrl: PropTypes.string.isRequired,
};

export default PdfViewer;
