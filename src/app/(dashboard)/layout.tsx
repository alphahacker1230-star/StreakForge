import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import BottomNav from "@/components/BottomNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
        <Topbar />
        <main className="flex-1 p-4 pb-20 md:pb-8 md:p-8">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
