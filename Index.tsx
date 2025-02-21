
import { ExpenseList } from "@/components/ExpenseList";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Index() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="expense-tracker-theme">
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-gray-500">Here's an overview of your expenses</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ExpenseList />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
