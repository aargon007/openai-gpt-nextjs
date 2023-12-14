'use client'
import ChatContainer from "@/components/Chat/ChatContainer";
import { StateContext } from "@/utils/StateManager";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BsStars } from "react-icons/bs";

const Page = () => {
    const { handleSubmit, input, setInput, messages } = useContext(StateContext);

    // axios.get('/api/user')
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });


    const featuresInput = [
        {
            title: "Show me a code snippet",
            detail: "of a website's sticky header"
        },
        {
            title: "Suggest fun activities",
            detail: "to do indoors with my high-energy dog"
        },
        {
            title: "Help me pick",
            detail: "an outfit that will look good on camera"
        },
        {
            title: "Create a charter",
            detail: "to start a film club "
        },
    ]

    return (
        <div className="w-full h-full">
            {
                messages?.length == 0 && <div role="presentation" className="mt-10 h-full flex flex-col justify-center items-center gap-10">
                    {/* model greeting section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-3 h-[72px] w-[72px]">
                            <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-black">
                                <svg className="w-[50px] h-[50px] block mt-[15px] ml-3">
                                    <defs>
                                        <linearGradient id="GradientColor" gradientTransform="rotate(90)">
                                            <stop offset="0%" stopColor="#ff4700" />
                                            <stop offset="100%" stopColor="#ff8c00" />
                                        </linearGradient>
                                    </defs>
                                    <BsStars fill="url('#GradientColor')" className="text-[40px] text-center" />
                                </svg>
                            </div>
                        </div>

                        <div className="mb-5 text-2xl font-medium text-white">
                            How can I help you today?
                        </div>
                    </div>
                    {/* suggested chat container */}
                    <div className="w-full md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
                        <div className="relative flex h-full flex-1 items-center justify-center md:flex-col">
                            {/* feture input  */}
                            <div className="w-full">
                                <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">

                                    <div className="mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
                                        <div className="w-full grid grid-cols-2 gap-2">
                                            {featuresInput?.map((feature, index) =>
                                                <div onClick={() => {
                                                    setInput(`${feature.title + feature.detail}`);
                                                }} key={index} className="transform-none">
                                                    <button className="relative inline-flex font-medium bg-[rgb(52,53,65)] hover:bg-[#40414f] border border-[rgb(86,88,105)] group w-full whitespace-nowrap rounded-xl text-[.875rem] px-4 py-3 text-left text-gray-300 md:whitespace-normal">
                                                        <div className="flex w-full gap-2 items-center justify-center">
                                                            <div className="flex w-full items-center justify-between">
                                                                <div className="flex flex-col overflow-hidden">
                                                                    <div className="truncate">
                                                                        {feature.title}
                                                                    </div>
                                                                    <div className="truncate font-normal opacity-50">
                                                                        {feature.detail}
                                                                    </div>
                                                                </div>
                                                                <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-[60%] pl-6 pr-4 opacity-0 hover:opacity-100">
                                                                    <span className="">
                                                                        <div className="rounded-lg bg-[#202123] p-1">
                                                                            <svg
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                className="h-4 w-4 stroke-2 text-[#ececf1]"
                                                                            >
                                                                                <path
                                                                                    d="M7 11L12 6L17 11M12 18V7"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth="2"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                ></path>
                                                                            </svg>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>)}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* if message exist then show them  */}
            {
                messages?.length !== 0 && <ChatContainer />
            }
        </div>
    );
};

export default Page;