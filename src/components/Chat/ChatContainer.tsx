'use client'
import { StateContext } from "@/utils/StateManager";
import { useContext } from "react";
import MarkdownPreview from "../CodePreview/MarkdownPreview";
import { BsStars } from "react-icons/bs";

const ChatContainer = () => {
    const { messages } = useContext(StateContext);

    return (
        <div className="w-full pb-[150px]">
            {messages.map(m => (
                <div key={m.id} className="w-full mt-5">
                    <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] } group">
                        <div className="flex-shrink-0 flex flex-col relative items-end">
                            <div>
                                <div className="pt-0.5">

                                    {m.role == "user" ? <div className="flex w-[24px] h-[24px] items-center bg-purple-500 p-1 justify-center overflow-hidden rounded-full">
                                        <div className="relative flex text-white text-[12px]">
                                            MU
                                        </div>
                                    </div> : <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div
                                            className="bg-[rgb(25,195,125)] w-[24px] h-[24px] relative p-1 rounded-sm text-white flex items-center justify-center"
                                        >
                                            <BsStars className="" />
                                        </div>
                                    </div>
                                    }
                                    {/* <img
							alt="User"
							loading="lazy"
							width="24"
							height="24"
							decoding="async"
							data-nimg="1"
							className="rounded-sm"
							style="color: transparent;"
							src=""
                            /> */}

                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)]">
                            <div className="font-semibold select-none text-[#ececf1]">{m.role == "user" ? "You" : "aargonGPT"}</div>
                            <div className="flex-col gap-1 md:gap-3">
                                <div className="flex flex-grow flex-col max-w-full">
                                    <div className="min-h-[20px] text-[#ececf1] flex flex-col items-start gap-3 whitespace-pre-wrap [.text-message+&amp;]:mt-5">
                                        {m.role == "user" ? <div>{m.content}</div> : <MarkdownPreview markdownContent={m.content} />}
                                    </div>
                                </div>
                                {/* edit icon  */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatContainer;