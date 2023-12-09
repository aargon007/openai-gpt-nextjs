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
    <main className="flex supports-[min-height:100dvh]:min-h-[100dvh] w-screen flex-col bg-gray-50 md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
      <div className="relative flex-1 flex-col justify-center px-5 py-8 text-gray-700 md:flex md:px-6 md:py-[22px] lg:px-8">
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
          className="min-h-[35vh] flex items-center md:items-start text-[25px] leading-[1.2] md:text-[40px]"
          aria-hidden="true"
        >
          <Typewriter features={features} />
        </div>
      </div>

      <div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black sm:rounded-t-[30px] md:rounded-none md:px-6">
        {/* right side nav  */}
        <div className="relative flex w-full grow flex-col items-center justify-center">
          <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8">
            Get started
          </h2>
          {/* login, register  */}
          <div className="mt-5 w-full max-w-[440px]">
            <div className="flex items-center justify-center gap-x-3 gap-y-2 sm:gap-y-0">
              {/* if user exist */}
              {userId && (
                <Link
                  className="group flex h-10 items-center gap-2 rounded-lg px-2 font-medium bg-blue-600 transition-all"
                  href="/chat"
                >
                  <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-white">
                    Chat with aargonGPT
                  </div>
                </Link>
              )}

              {/* login  */}
              {!userId && (
                <SignInButton mode="modal">
                  <button className="relative w-full flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                    {" "}
                    Sign In
                  </button>
                </SignInButton>
              )}

              {/* register */}
              {!userId && (
                <SignUpButton mode="modal">
                  <button className="relative w-full flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                    {" "}
                    Sign Up
                  </button>
                </SignUpButton>
              )}

            </div>
          </div>
        </div>

        {/* privacy policy */}
        <div className="mt-10 flex flex-col justify-center items-center">
          <div className="flex justify-center text-[#cdcdcd] md:mb-3">
            <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
              <text
                x="10"
                y="40"
                fontFamily="Arial, sans-serif"
                fontSize="30"
                fill="black"
              >
                aargonGPT
              </text>
            </svg>
          </div>
          <div className="py-3 text-xs">
            <span className="mx-3 text-gray-500" rel="noreferrer">
              Terms of use
            </span>
            <span className="text-gray-600">|</span>
            <span className="mx-3 text-gray-500" rel="noreferrer">
              Privacy policy
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;