'use client'
import { StateContext } from "@/utils/StateManager";
import Link from "next/link";
import { useContext } from "react";
import UserProfile from "./UserProfile";
import { useRouter } from "next/navigation";
import { BsStars } from "react-icons/bs";

const Sidebar = () => {
    const { openMenu, setOpenMenu, setMessages } = useContext(StateContext);
    const router = useRouter()

    return (
        <div className={`scrollbar navigation  ${openMenu ? "menu-active" : ""} bg-[rgba(0,0,0)]`}>
            <div className="px-0 container">
                <div className="w-[280px] transition-all px-[15px] rounded-tr-[10px] rounded-br-[10px]">
                    {/* main sidebar content */}
                    <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto min-h-[calc(100vh-80px)]">
                        {/* new chat  */}
                        <div className="pt-3.5">
                            <div
                                className="pb-0.5 last:pb-0 transform-none"
                            >
                                <div
                                    className="group flex cursor-pointer h-10 items-center gap-2 rounded-lg px-2 font-medium hover:bg-[#202123] transition-all"
                                    onClick={() => {
                                        router.push("/chat");
                                        setMessages([])
                                        setOpenMenu(false);
                                    }}
                                >
                                    <div className="h-7 w-7 flex-shrink-0">
                                        <div className="relative flex h-full items-center justify-center rounded-full bg-gray-50 text-black">
                                            <svg className="w-full h-full block mt-[10px] ml-[6px]">
                                                <defs>
                                                    <linearGradient id="GradientColor" gradientTransform="rotate(90)">
                                                        <stop offset="0%" stopColor="#ff4700" />
                                                        <stop offset="100%" stopColor="#ff8c00" />
                                                    </linearGradient>
                                                </defs>
                                                <BsStars fill="url('#GradientColor')" className="text-center" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-300">
                                        New chat
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="flex items-center">
                                            <button className="text-gray-300">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 flex items-center justify-center"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* all chat */}
                        <div className="flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm">
                            <div>
                                <span>
                                    {/* today */}
                                    <div
                                        className="relative mt-5 h-auto "
                                    >
                                        <div>
                                            <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all dark:bg-black text-[rgb(102,102,102)]">
                                                Today
                                            </h3>
                                        </div>
                                        <ol>
                                            {/* chat item  */}
                                            <li
                                                className="relative z-[15] h-auto overflow-hidden"
                                            >
                                                <div className="group relative text-[rgba(236,236,241,.9)]">
                                                    <Link
                                                        href="/chat/1"
                                                        className="flex items-center gap-2 rounded-lg p-2 bg-[#202123]"
                                                    >
                                                        <div className="relative grow overflow-hidden whitespace-nowrap">
                                                            Translation Integration with i18n
                                                            <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l to-transparent from-[#202123]"></div>
                                                        </div>
                                                    </Link>
                                                    <button className="absolute bottom-0 right-0 top-0 flex w-9 items-center justify-center rounded-lg text-[#8e8ea0] transition hover:text-[#c5c5d2]">
                                                        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-14 rounded-lg bg-gradient-to-l from-[#202123] from-60% to-transparent"></div>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="currentColor"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    {/* yesterday */}

                                    {/* previous 7 days */}


                                </span>
                                {/* monthly content */}
                                <span>
                                    <div
                                        className="relative mt-5 h-auto"
                                    >
                                        <div>
                                            <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-gray-600">
                                                October
                                            </h3>
                                        </div>
                                        <ol>

                                        </ol>
                                    </div>
                                </span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    {/* profile */}
                    <div className="flex flex-col pt-2 border-t border-white/20">
                        <div className="flex w-full items-center">
                            <div className="grow">
                                <div className="group relative" data-headlessui-state="">
                                    <UserProfile />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setOpenMenu(!openMenu)} className={`fixed ${openMenu ? "left-[280px]" : "-left-20"}  top-0 pt-2 lg:hidden duration-500 transition-all`}>
                <button type="button" className="ml-1 flex h-8 w-8 items-center justify-center text-white bg-[rgb(52,53,65)] border rounded">
                    <span className="sr-only">Close sidebar</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                        <path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;