"use client"
interface BarGaugeProps {
  value: number;
}

export default function BarGauge({ value = 50 }: BarGaugeProps) {
  const width = 600;
  const height = 60;
  const markerHeight = 40;

  const sections = [
    { start: 0, end: 20, color: "#2ecc71", label: "Best" },
    { start: 20, end: 40, color: "#82e0aa", label: "Good" },
    { start: 40, end: 60, color: "#bdc3c7", label: "Average" },
    { start: 60, end: 70, color: "#f1c40f", label: "Target" },
    { start: 70, end: 100, color: "#e74c3c", label: "Worst" },
  ];

  const getMarkerPosition = (value: number) => {
    return (value / 100) * width;
  };

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto">
      <svg width={width} height={height + 40} className="overflow-visible">
        {sections.map((section, index) => {
          const sectionWidth = ((section.end - section.start) / 100) * width;
          const x = (section.start / 100) * width;
          return (
            <rect
              key={index}
              x={x}
              y={0}
              width={sectionWidth}
              height={height}
              fill={section.color}
            />
          );
        })}

        {/* Value marker */}
        <polygon
          points={`${getMarkerPosition(value)},${height} ${getMarkerPosition(value) - 10},${height + markerHeight} ${getMarkerPosition(value) + 10},${height + markerHeight}`}
          fill="black"
        />

        {/* Section labels */}
        {sections.map((section, index) => {
          const x = ((section.start + section.end) / 200) * width;
          return (
            <text
              key={index}
              x={x}
              y={height + markerHeight + 20}
              textAnchor="middle"
              className="text-xs font-medium"
            >
              {section.label}
            </text>
          );
        })}
      </svg>

      <div className="mt-8 text-lg font-semibold">Value: {value}</div>
    </div>
  );
}
