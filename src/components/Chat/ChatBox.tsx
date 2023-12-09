'use client'
import { StateContext } from "@/utils/StateManager";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

const ChatBox = () => {
    const { handleSubmit, input, setInput,stop, reload, isLoading } = useContext(StateContext);
    const pathname = usePathname();
    const router = useRouter();
console.log(isLoading);

    const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setInput(event.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // On "Enter" key press without shift, prevent default (form submission) and submit the form
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Submit the form (replace with your submit logic)
            const form = e.currentTarget.form;
            if (form) {
                const formEvent = new Event('submit', { bubbles: true, cancelable: true });
                form.dispatchEvent(formEvent);
            }
            //
            // if (pathname == "/chat") {                
            //     router.push("/chat/1")
            // }
        }

    };

    return (
        <div className="px-5 xl:px-0 max-w-[965px] mx-auto">
            <div className="fixed bottom-0 w-full bg-[rgb(52,53,65)] pb-5 z-[50] pr-10 xl:pr-0 lg:max-w-[calc(100vw-300px)] xl:max-w-[965px]">
                <div className="">
                    <form onSubmit={handleSubmit} className="overflow-hidden flex w-full h-full relative border items-center justify-center text-white p-2 rounded-2xl bg-[rgb(52,53,65)] border-[rgb(86,88,105)]">
                        <textarea
                            id="prompt-textarea"
                            value={input}
                            placeholder="Say something..."
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="h-full w-full pt-5 pl-3 pr-10 scrollbar outline-none resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 placeholder-white/50"
                        ></textarea>
                        <button
                            type="submit"
                            className="absolute right-3 top-[30%] text-white p-0.5 border rounded-lg transition-colors"
                            data-testid="send-button"
                        >
                            <span className="">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-white"
                                >
                                    <path
                                        d="M7 11L12 6L17 11M12 18V7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ChatBox;