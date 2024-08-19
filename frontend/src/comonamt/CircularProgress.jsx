const CircularProgress = ({ value, max = 100 }) => {
  const percentage = (value / max) * 100;
  const strokeDasharray = 2 * Math.PI * 45; // 45 is the radius of the circle
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="relative w-32 h-32 p-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
        />
        <circle
          className="text-blue-600 progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          style={{
            strokeDasharray: `${strokeDasharray}`,
            strokeDashoffset: strokeDashoffset,
          }}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="20"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {value}
        </text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center text-sm mt-10-center ">
        نسبة التصويت
      </div>
    </div>
  );
};

export default CircularProgress;
