
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  PiggyBank,
  Settings,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: DollarSign, label: "Expenses", path: "/expenses" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Users, label: "Split", path: "/split" },
  { icon: PiggyBank, label: "Goals", path: "/goals" },
  { icon: CreditCard, label: "Payment Modes", path: "/payments" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 px-2">
          <DollarSign className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">ExpenseTracker</h1>
        </div>
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                location.pathname === item.path &&
                  "bg-primary text-white hover:bg-primary dark:bg-primary dark:text-white dark:hover:bg-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
