import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 dashboard-section">
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}
