import Sidebar from "@/components/Nav/Sidebar";
import TopNav from "@/components/Nav/TopNav";
import type { Metadata } from 'next'
import { auth, clerkClient, useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import ChatBox from "@/components/Chat/ChatBox";
import { StateManager } from "@/utils/StateManager";
import Spinner from "@/components/Loader/Spinner";

export const metadata: Metadata = {
    title: 'chat with aargonGPT using openAI model',
    description: 'chat with openai gpt model.',
}

const layout = async ({ children }: { children: React.ReactNode }) => {
    const { userId,getToken } = auth();
    if(userId){
        <Spinner/>
    }
    // const user = await clerkClient.users.getUser(userId);
    return (
        <StateManager>
            <div className="lg:flex lg:flex-col min-h-screen overflow-hidden opacity-100 relative z-[1] transition-all bg-[rgb(52,53,65)]">
                {/* sidebar */}
                <Sidebar />
                {/* main container */}
                <div className="main-content right-chat-active">
                    {/* top nav  */}
                    <TopNav />
                    <div
                        className="middle-sidebar-bottom"
                        style={{ padding: "56px 15px 0" }}
                    >
                        <div className="middle-sidebar-left min-h-[calc(100vh-165px)]">
                            {children}
                        </div>
                    </div>
                    {/* message container */}
                    <ChatBox />
                </div>
            </div>

        </StateManager>

    );
};

export default layout;