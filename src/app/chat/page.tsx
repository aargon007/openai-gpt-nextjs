import Sidebar from "@/components/Nav/Sidebar";
import TopNav from "@/components/Nav/TopNav";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { userId } = auth();

    if (!userId) {
        redirect("/");
    }

    // const user = await clerkClient.users.getUser(userId);

    return (
        <div className="lg:flex lg:flex-col min-h-screen overflow-hidden opacity-100 relative z-[1] transition-all bg-[rgba(52,53,65,.9)]">
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
                    <div className="middle-sidebar-left">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;