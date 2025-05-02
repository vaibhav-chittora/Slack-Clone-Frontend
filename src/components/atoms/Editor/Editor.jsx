import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";

export const Editor = ({
    variant = "create",
    onsubmit,
    onCancel,
    placeholder,
    disabled,
    defaultValue,
}) => {
    const [text, setText] = useState("");
    const [isToolbarVisible, setIsToolbarVisible] = useState(false);

    const containerRef = useRef(); // required to initialize the quill editor
    const submitRef = useRef();
    const disabledRef = useRef();
    const placeholderRef = useRef();
    const defaultValueRef = useRef();

    const quillRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const editorContainer = container.appendChild(
            container.ownerDocument.createElement("div")
        );

        const options = {
            theme: "snow",
            placeholder: placeholderRef.current,
            modules: {
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    ["link", "image"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["clean"],
                ],
                Keyboard: {
                    bindings: {
                        enter: {
                            key: "Enter",
                            handler: () => {
                                return;
                            },
                        },
                        shift_enter: {
                            key: "Enter",
                            shiftKey: true,
                            handler: () => {
                                quill.insertText(quill.getSelection()?.index || 0, "\n"); // insert a new line
                            },
                        },
                    },
                },
            },
        };

        const quill = new Quill(editorContainer, options);

        quillRef.current = quill;
        quillRef.current.focus();

        quill.setContents(defaultValueRef.current);
    }, []);

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm
         focus-within:border-slate-500 bg-white"
            >
                <div className="h-full ql-custom" ref={containerRef} />
            </div>

            <p className=" p-2 text-[10px] text-muted-foreground flex justify-end">
                <strong>Shift + Enter</strong>&nbsp; to insert a new line
            </p>
        </div>
    );
};
