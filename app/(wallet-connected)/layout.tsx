"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  BarChart2,
  GitBranch,
  Truck,
  Leaf,
  Users,
} from "lucide-react";

const sidebarItems = [
  { name: "Impact Overview", icon: BarChart2, href: "/impact-overview" },
  { name: "DPP Trace", icon: GitBranch, href: "/dpp-trace" },
  { name: "Suppliers", icon: Truck, href: "/suppliers" },
  { name: "Trade Carbon", icon: Leaf, href: "/trade-carbon" },
  { name: "Consumers", icon: Users, href: "/consumers" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="bg-background">
      <div className="flex h-screen">
        <aside
          className={`bg-background transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-64" : "w-20"
          } flex flex-col`}
        >
          <div className="flex items-center justify-between p-4">
            <h1
              className={`font-bold text-xl ${isSidebarOpen ? "" : "hidden"}`}
            >
              Dashboard
            </h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {isSidebarOpen ? (
                <ChevronLeft size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} passHref>
                    <span
                      className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-white-200 transition-colors duration-200 ${
                        pathname === item.href ? "bg-white text-black" : ""
                      }`}
                    >
                      <item.icon size={24} />
                      {isSidebarOpen && <span>{item.name}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
