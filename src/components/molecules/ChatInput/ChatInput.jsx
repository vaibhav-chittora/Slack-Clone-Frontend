import { Editor } from "@/components/atoms/Editor/Editor"

export const ChatInput = () => {

    async function handleSubmit({ body }) {
        console.log(body)
    }
    return (
        <div
            className="px-5 w-full "
        >
            <Editor
                placeholder="Type your message here..."
                variant="create"
                onSubmit={handleSubmit}
                onCancel={() => { }}
                disabled={false}
                defaultValue=""

            />
        </div>
    )
}