function Logo({ width = "200px" }) {
  return (
    <div style={{ width, maxWidth: '100%' }}>
      <svg
        viewBox="0 0 250 60"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="BlogPost Logo"
      >
        <rect width="100%" height="100%" fill="white" />
        <g transform="translate(10,10)">
          <path d="M10 30 L30 10 L36 16 L16 36 Z" fill="#007BFF" />
          <circle cx="30" cy="10" r="2" fill="white" />
        </g>
        <text
          x="60"
          y="40"
          fontFamily="Segoe UI, sans-serif"
          fontSize="28"
          fontWeight="700"
        >
          <tspan fill="#007BFF">Blog</tspan>
          <tspan fill="#222">Post</tspan>
        </text>
      </svg>
    </div>
  );
}

export default Logo;
