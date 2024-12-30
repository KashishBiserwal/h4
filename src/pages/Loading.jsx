import React from 'react'
import '../css/UploadFile.css';

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <br />
            <div>Loading...</div>
        </div>
    )
}
