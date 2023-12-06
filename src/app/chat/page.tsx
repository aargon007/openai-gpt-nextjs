import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/");
    }

    // const user = await clerkClient.users.getUser(userId);

    return (
        <div className="relative z-0 flex w-full h-full overflow-hidden">
            {/* sidebar */}

            {/* main container */}
        </div>
    );
};

export default page;