
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Expenses() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Expenses</h1>
            <p className="text-gray-500">Manage and track your expenses</p>
          </div>
          {/* We'll implement the expense management features in the next iteration */}
        </main>
      </div>
    </div>
  );
}
