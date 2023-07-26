import { Sandpack } from "@codesandbox/sandpack-react";
export default function SandpackReact() {
    return (
        <>
            <div>
                <Sandpack
                    customSetup={{
                        dependencies: {
                            "react-markdown": "latest"
                        }
                    }}
                    template="react" />;
            </div>
        </>
    )
}