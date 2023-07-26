import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';

function DynamicComponent({ value }) {

    useEffect(() => {
        // console.log(value, 'vali')
        // var elementHtml = document.getElementById("container_html");

        // const container = document.createElement('div');
        // container.setAttribute('id', 'dynamic-container');

        // elementHtml.appendChild(container);

        // var element = document.getElementById("dynamic_root");
        // var script = document.createElement("script");
        // script.innerHTML = `
        // const name = "rizal"
        // alert(name)
        // ReactDOM.render((<div>hello</div>), document.getElementById('container_jsx'));
        // `;
        // element.appendChild(script);





    }, [value]);


    const handleRender = (value) => {
        if (value) {
            var script = document.createElement("script");
            script.innerHTML = value
            const root = ReactDOM.createRoot(document.getElementById("dynamic_root"));
            root.render(

            );
        }
    }

    return (
        <div>

            <h2>React Script Component</h2>
            <Button onClick={() => handleRender(value)}>Hello Button</Button>

            <div id="dynamic_root">
            </div>

        </div>
    );
}

export default DynamicComponent;