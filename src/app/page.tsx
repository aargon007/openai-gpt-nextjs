import Typewriter from '@/utils/Typewriter'
import Link from 'next/link';
import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";

const Home = () => {
  const { userId } = auth();
  console.log(userId);
  
  const features = [
    {
      id: 1,
      title: "Text Generation",
      description: "Generate creative stories based on a given plot summary."
    },
    {
      id: 2,
      title: "Speech-to-Text",
      description: "Transcribe spoken lectures into text for easy note-taking."
    },
    {
      id: 3,
      title: "Image Generation",
      description: "Create surreal images from textual descriptions or concepts."
    },
    {
      id: 4,
      title: "Text-to-Speech",
      description: "Convert written articles into engaging audiobooks."
    }
  ];


  return (
    <main className="flex min-h-full w-screen flex-col bg-gray-50 sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
      <div className="relative flex-1 flex-col justify-center px-5 pt-8 text-gray-700 md:flex md:px-6 md:py-[22px] lg:px-8">
        {/* top nav */}
        <nav className="left-0 top-8 flex w-full sm:absolute md:top-[22px] sm:px-6 lg:px-8">
          <h1 aria-label="chat GPT by aargon">
            <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
              <div>
                aargonGPT<span className="font-circle text-amber-500">●</span>
              </div>
            </div>
          </h1>
        </nav>

        {/* typing feature  */}
        <div
          className="min-h-[30vh] flex items-center md:items-start text-[25px] leading-[1.2] md:text-[40px]"
          aria-hidden="true"
        >
          <Typewriter features={features} />
        </div>
      </div>

      <div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black sm:rounded-t-[30px] md:rounded-none md:px-6">
        {/* responsive */}
        {/* <nav className="flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8">
          <h1 aria-label="ChatGPT by OpenAI">
            <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
              <div>
                aargonGPT<span className="font-circle">●</span>
              </div>
            </div>
          </h1>
        </nav> */}

        {/* right side nav  */}
        <div className="relative flex w-full grow flex-col items-center justify-center">
          <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8">
            Get started
          </h2>
          {/* login, register  */}
          <div className="mt-5 w-full max-w-[440px]">
            <div className="grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
              {/* login  */}
              {userId ? "" : <SignInButton mode='modal'>
                <button
                  className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
                > Sign In</button>
              </SignInButton>}
              {/* <Link href="/sign-in"
                className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
              > Sign In</Link> */}
              {/* register */}
              {userId ? <Link
                className="group flex h-10 items-center gap-2 rounded-lg px-2 font-medium hover:bg-[#202123] transition-all"
                href="/chat"
              >
                <div className="h-7 w-7 flex-shrink-0">
                  <div className="relative flex h-full items-center justify-center rounded-full bg-gray-50 text-black">
                    Ar
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
              </Link> : <SignUpButton mode='modal'>
                <button
                  className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
                > Sign Up</button>
              </SignUpButton>}
              {/* <Link href="/sign-up" className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                Sign up
              </Link> */}
            </div>
          </div>
        </div>

        {/* privacy policy */}
        <div className="mt-10 flex flex-col justify-center ">
          <div className="flex justify-center text-[#cdcdcd] md:mb-3">
            <svg
              width="200"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="30" fill="black">
                aargonGPT
              </text>
            </svg>
          </div>
          <div className="py-3 text-xs">
            <span
              className="mx-3 text-gray-500"
              rel="noreferrer"
            >
              Terms of use
            </span>
            <span className="text-gray-600">|</span>
            <span
              className="mx-3 text-gray-500"
              rel="noreferrer"
            >
              Privacy policy
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;