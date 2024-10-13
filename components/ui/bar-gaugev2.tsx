"use client";

import { useEffect, useState } from "react";
import { fetchCompanyById } from "@/utils/databaseQueries/companies";
import { CompanyData } from "@/providers/CompanyProvider";

interface BarGaugeProps {
  value: number;
  companyData: CompanyData | null | undefined;
}

export default function BarGauge({ companyData = null }: BarGaugeProps) {
  const width = 60;
  const height = 450;
  const markerWidth = 5;

  const esg_rating = (companyData?.esg_rating ?? 0) * 10;
  const market_average = (companyData?.market_average ?? 0) * 10;
  const regulation_target = (companyData?.regulation_target ?? 0) * 10;
  const best_performer = (companyData?.best_performer ?? 0) * 10;

  console.log({ esg_rating, market_average, regulation_target, best_performer });

  const getMarkerPosition = (value: number) => {
    const minValue = 10;
    const maxValue = 40;
    const adjustedValue = (value - minValue) / (maxValue - minValue);
    return (1 - adjustedValue) * height;
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <svg width={width} height={height} className="overflow-visible">
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e74c3c" />
            <stop offset="50%" stopColor="#f1c40f" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>
        </defs>
        <rect x={0} y={0} width={width} height={height} fill="url(#barGradient)" />

        <polygon
          points={`0,${getMarkerPosition(esg_rating)} ${-markerWidth},${getMarkerPosition(esg_rating) - 2.5} ${-markerWidth},${getMarkerPosition(esg_rating) + 2.5}`}
          fill="black"
        />
        <text
          x={-markerWidth - 10}
          y={getMarkerPosition(esg_rating ?? 0)}
          textAnchor="end"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          Company Rating: {esg_rating ?? 0}
        </text>

        <polygon
          points={`${width},${getMarkerPosition(market_average)} ${width + markerWidth},${getMarkerPosition(market_average) - 2.5} ${width + markerWidth},${getMarkerPosition(market_average) + 2.5}`}
          fill="black"
        />
        <text
          x={width + markerWidth + 10}
          y={getMarkerPosition(market_average)}
          textAnchor="start"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          Industry Benchmark: {market_average}
        </text>

        <polygon
          points={`${width},${getMarkerPosition(regulation_target)} ${width + markerWidth},${getMarkerPosition(regulation_target) - 2.5} ${width + markerWidth},${getMarkerPosition(regulation_target) + 2.5}`}
          fill="black"
        />
        <text
          x={width + markerWidth + 10}
          y={getMarkerPosition(regulation_target)}
          textAnchor="start"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          Target: {regulation_target}
        </text>

        {["100", "10"].map((label, index) => {
          const y = index === 0 ? 0 : height;
          return (
            <text
              key={index}
              x={width + 10}
              y={y}
              textAnchor="start"
              alignmentBaseline="middle"
              className="text-xs font-medium"
            >
              {label}
            </text>
          );
        })}
      </svg>
      <div className="text-center mt-2">
        <p className="text-lg font-bold">Emission Intensity Benchmarks</p>
        <p className="text-sm">(in kgCO<sub>2</sub>e/kg)</p>
      </div>
    </div>
  );
}
