import { Button } from "@/components/ui/button";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import { PiTextAa } from "react-icons/pi";
import Hint from "../Hint/Hint";
import { ImageIcon, SendIcon } from "lucide-react";

export const Editor = ({
    variant = "create",
    onSubmit,
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

    function toggleToolbar() {
        setIsToolbarVisible(!isToolbarVisible);
        const toolbar = containerRef.current.querySelector(".ql-toolbar");
        if (toolbar) {
            toolbar.classList.toggle("hidden");
        }

    }

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
                    ["link"],
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

                <div className="flex px-2 pb-2 z-[5] ">
                    <Hint
                        label={!isToolbarVisible ? "Hide toolbar" : "Show toolbar"}
                    >
                        <Button
                            size='iconSm'
                            variant='ghost'
                            disabled={false}
                            onClick={toggleToolbar}
                        >
                            <PiTextAa className="size-4" />
                        </Button>

                    </Hint>
                    <Hint
                        label='Image'
                    >
                        <Button
                            variant='ghost'
                            onClick={() => { }}
                            size='iconSm'
                            disabled={disabled}
                        >
                            <ImageIcon className="size-4" />
                        </Button>
                    </Hint>

                    <Hint
                        label='Send message'

                    >
                        <Button
                            size='iconSm'
                            className='ml-auto bg-[#007a6a] hover:bg-[#007a6a]/80 text-white'
                            onClick={() => {
                                const messageContent = JSON.stringify(quillRef.current?.getContents())
                                onSubmit({ body: messageContent });
                                quillRef.current?.setText("");
                            }}
                            disabled={disabled}
                        >

                            <SendIcon className="size-4" />
                        </Button>
                    </Hint>
                </div>
            </div>

            <p className=" p-2 text-[10px] text-muted-foreground flex justify-end">
                <strong>Shift + Enter</strong>&nbsp;to insert a new line
            </p>
        </div>
    );
};
