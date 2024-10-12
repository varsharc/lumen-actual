"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  BarChart2,
  GitBranch,
  Truck,
  Leaf,
  Users,
  HomeIcon,
} from "lucide-react";
import { useAccount } from "wagmi";

const sidebarItems = [
  { name:"Home", icon: HomeIcon, href: "/" },
  { name: "Impact Overview", icon: BarChart2, href: "/impact-overview" },
  { name: "DPP Trace", icon: GitBranch, href: "/dpp-trace" },
  { name: "Suppliers", icon: Truck, href: "/suppliers" },
  { name: "Trade Carbon", icon: Leaf, href: "/trade-carbon" },
  { name: "Consumers", icon: Users, href: "/consumers" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const { address } = useAccount();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  if(!address) return push("/login");
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
              Lumen
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
          <div className="flex-1">
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
          </div>
        </aside>
        <div className="flex-1 overflow-y-auto p-8">{children}</div>
      </div>
    </div>
  );
}
