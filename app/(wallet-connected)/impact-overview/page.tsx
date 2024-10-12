"use client";

import BarGauge from "@/components/ui/bar-gauge";
import ESG from "@/components/ui/esg";

export default function ImpactOverview() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Impact Overview</h1>
      <ESG eScore={80} sScore={70} gScore={90} />
      <BarGauge value={60} />
    </div>
  );
}
