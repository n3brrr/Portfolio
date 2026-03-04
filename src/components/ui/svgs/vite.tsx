import type { SVGProps } from "react";

const Vite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        x1="-9.062%"
        y1="-1.602%"
        x2="97.228%"
        y2="108.824%"
        id="vite-a"
      >
        <stop stopColor="#41D1FF" offset="0%" />
        <stop stopColor="#BD34FE" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="62.914%"
        y1="5.105%"
        x2="62.914%"
        y2="105.811%"
        id="vite-b"
      >
        <stop stopColor="#FFEA83" offset="0%" />
        <stop stopColor="#FFDD35" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M255.153 37.937L134.897 252.99c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.748-4.814 1.371-10.646 6.827-9.67l120.392 21.517a6.537 6.537 0 002.32-.004L248.31 28.27c5.44-.99 9.574 4.796 6.843 9.667z"
      fill="url(#vite-a)"
    />
    <path
      d="M185.432 15.03L96.537 32.467a3.268 3.268 0 00-2.635 3.014l-5.474 92.456c-.128 2.177 1.872 3.868 3.996 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.937 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.65c2.373-.72 4.652 1.36 4.15 3.79l-11.698 56.621c-.734 3.541 3.978 5.473 5.943 2.436L132.856 225l72.515-144.73c1.213-2.423-.88-5.186-3.541-4.672l-25.503 4.922c-2.398.462-4.435-1.77-3.759-4.114l16.646-57.705c.678-2.35-1.37-4.583-3.782-4.113z"
      fill="url(#vite-b)"
    />
  </svg>
);

export { Vite };
