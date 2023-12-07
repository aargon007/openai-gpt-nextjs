import { Popover } from "@headlessui/react";

const UserProfile = () => {
    
    return (
        <Popover className="relative outline-none">
            <Popover.Button
                className="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-[#202123] outline-none"
            >
                <div className="flex-shrink-0">
                    <div className="flex items-center bg-purple-500 p-1 justify-center overflow-hidden rounded-full">
                        <div className="relative flex text-white text-[12px]">
                            {/* <img
                                    alt="User"
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    className="rounded-sm"
                                    style="color: transparent;"
                                    src=""
                                /> */}MU
                        </div>
                    </div>
                </div>
                <div className="relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                    <div className="font-semibold">Md Muhaiminul</div>
                </div>
            </Popover.Button>

            <Popover.Panel className="absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg border pb-1.5 pt-1 outline-none border-gray-800 bg-[rgb(32,33,35)] opacity-100 translate-y-0">
                <div role="menu">
                    <nav role="none">
                        <div className="flex px-3 min-h-[44px] py-1 items-center gap-3 text-white cursor-pointer text-sm hover:bg-[#343541]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                                <path d="M10.663 6.3872C10.8152 6.29068 11 6.40984 11 6.59007V8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8V6.59007C13 6.40984 13.1848 6.29068 13.337 6.3872C14.036 6.83047 14.5 7.61105 14.5 8.5C14.5 9.53284 13.8737 10.4194 12.9801 10.8006C12.9932 10.865 13 10.9317 13 11V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V11C11 10.9317 11.0068 10.865 11.0199 10.8006C10.1263 10.4194 9.5 9.53284 9.5 8.5C9.5 7.61105 9.96397 6.83047 10.663 6.3872Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5V19C4 20.6569 5.34315 22 7 22H19C19.3346 22 19.6471 21.8326 19.8325 21.5541C20.0179 21.2755 20.0517 20.9227 19.9225 20.614C19.4458 19.4747 19.4458 18.5253 19.9225 17.386C19.9737 17.2637 20 17.1325 20 17V3C20 2.44772 19.5523 2 19 2H7C5.34315 2 4 3.34315 4 5ZM6 5C6 4.44772 6.44772 4 7 4H18V16H7C6.64936 16 6.31278 16.0602 6 16.1707V5ZM7 18H17.657C17.5343 18.6699 17.5343 19.3301 17.657 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18Z" fill="currentColor"></path>
                            </svg>
                            Custom instructions
                        </div>
                        <div className="flex px-3 min-h-[44px] py-1 items-center gap-3 text-white cursor-pointer text-sm hover:bg-[#343541]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                                <path d="M11.6439 3C10.9352 3 10.2794 3.37508 9.92002 3.98596L9.49644 4.70605C8.96184 5.61487 7.98938 6.17632 6.93501 6.18489L6.09967 6.19168C5.39096 6.19744 4.73823 6.57783 4.38386 7.19161L4.02776 7.80841C3.67339 8.42219 3.67032 9.17767 4.01969 9.7943L4.43151 10.5212C4.95127 11.4386 4.95127 12.5615 4.43151 13.4788L4.01969 14.2057C3.67032 14.8224 3.67339 15.5778 4.02776 16.1916L4.38386 16.8084C4.73823 17.4222 5.39096 17.8026 6.09966 17.8083L6.93502 17.8151C7.98939 17.8237 8.96185 18.3851 9.49645 19.294L9.92002 20.014C10.2794 20.6249 10.9352 21 11.6439 21H12.3561C13.0648 21 13.7206 20.6249 14.08 20.014L14.5035 19.294C15.0381 18.3851 16.0106 17.8237 17.065 17.8151L17.9004 17.8083C18.6091 17.8026 19.2618 17.4222 19.6162 16.8084L19.9723 16.1916C20.3267 15.5778 20.3298 14.8224 19.9804 14.2057L19.5686 13.4788C19.0488 12.5615 19.0488 11.4386 19.5686 10.5212L19.9804 9.7943C20.3298 9.17767 20.3267 8.42219 19.9723 7.80841L19.6162 7.19161C19.2618 6.57783 18.6091 6.19744 17.9004 6.19168L17.065 6.18489C16.0106 6.17632 15.0382 5.61487 14.5036 4.70605L14.08 3.98596C13.7206 3.37508 13.0648 3 12.3561 3H11.6439Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"></path>
                                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2"></circle>
                            </svg>
                            Settings
                        </div>
                        <div className="h-px bg-white/10" role="none"></div>
                        <button className="flex px-3 min-h-[44px] py-1 items-center gap-3 text-white cursor-pointer text-sm hover:bg-[#343541] w-full outline-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                                <path d="M11 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H11" stroke="currentColor" strokeWidth="2" stroke-linecap="round"></path>
                                <path d="M20 12H11M20 12L16 16M20 12L16 8" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            Log out
                        </button>
                    </nav>
                </div>
            </Popover.Panel>
        </Popover>
    );
};

export default UserProfile;