import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import DynamicComponent from '../components/DynamicComponent'

function LivePreview() {
    const [code, setCode] = useState('');

    const handleCodeChange = (newValue, e) => {
        setCode(newValue);
    };



    return (
        <div>
            <div>
                <MonacoEditor
                    width="500"
                    height="400"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    onChange={handleCodeChange}
                />
            </div>
            <button >Render</button>
            <div>
                <h2>Live Preview:</h2>
                <DynamicComponent value={code} />


            </div>
        </div>
    );
}

export default LivePreview;