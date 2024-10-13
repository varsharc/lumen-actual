"use client";
interface BarGaugeProps {
  value: number;
}

export default function BarGauge({ value = 30 }: BarGaugeProps) {
  const width = 60;
  const height = 450;
  const markerWidth = 5;

  // Adjusted to fit the 10 to 40 range
  const getMarkerPosition = (value: number) => {
    const minValue = 10;
    const maxValue = 40;
    const adjustedValue = (value - minValue) / (maxValue - minValue);
    return (1 - adjustedValue) * height;
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <svg width={width} height={height} className="overflow-visible">
        {/* Gradient Bar */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e74c3c" />
            <stop offset="50%" stopColor="#f1c40f" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>
        </defs>
        <rect x={0} y={0} width={width} height={height} fill="url(#barGradient)" />

        {/* Value marker */}
        <polygon
          points={`0,${getMarkerPosition(value)} ${-markerWidth},${getMarkerPosition(value) - 2.5} ${-markerWidth},${getMarkerPosition(value) + 2.5}`}
          fill="black"
        />
        <text
          x={-markerWidth - 10}
          y={getMarkerPosition(value)}
          textAnchor="end"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          you: {value}
        </text>

        {/* Industry Benchmark marker */}
        <polygon
          points={`${width},${getMarkerPosition(19)} ${width + markerWidth},${getMarkerPosition(19) - 2.5} ${width + markerWidth},${getMarkerPosition(19) + 2.5}`}
          fill="black"
        />
        <text
          x={width + markerWidth + 10}
          y={getMarkerPosition(19)}
          textAnchor="start"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          Industry Benchmark: 19
        </text>

        {/* Target marker */}
        <polygon
          points={`${width},${getMarkerPosition(23)} ${width + markerWidth},${getMarkerPosition(23) - 2.5} ${width + markerWidth},${getMarkerPosition(23) + 2.5}`}
          fill="black"
        />
        <text
          x={width + markerWidth + 10}
          y={getMarkerPosition(23)}
          textAnchor="start"
          alignmentBaseline="middle"
          className="text-sm font-medium"
          fill="black"
        >
          Target: 23
        </text>

        {/* Range labels */}
        {["40", "10"].map((label, index) => {
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
