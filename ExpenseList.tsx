
import { BarChart3, ShoppingCart, Plane, Coffee, Home } from "lucide-react";

const categories = [
  { id: 1, name: "Shopping", icon: ShoppingCart, amount: 450 },
  { id: 2, name: "Travel", icon: Plane, amount: 850 },
  { id: 3, name: "Food", icon: Coffee, amount: 200 },
  { id: 4, name: "Rent", icon: Home, amount: 1200 },
];

export function ExpenseList() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Expenses</h2>
        <BarChart3 className="h-5 w-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <category.icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
            <span className="font-semibold">${category.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
