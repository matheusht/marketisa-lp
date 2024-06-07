import React, { FC } from "react";

const MarketisaLogo: FC<{ width: number }> = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width={width}
    height={"auto"}
  >
    <defs>
      <linearGradient
        id="gradient1"
        x1="279.12"
        y1="483.88"
        x2="425.01"
        y2="1137.18"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3362f1" />
        <stop offset="1" stopColor="#ff71ff" />
      </linearGradient>
      <linearGradient
        id="gradient2"
        x1="694.27"
        y1="391.18"
        x2="840.15"
        y2="1044.48"
        xlinkHref="#gradient1"
      />
      <linearGradient
        id="gradient3"
        x1="486.24"
        y1="437.63"
        x2="632.13"
        y2="1090.93"
        xlinkHref="#gradient1"
      />
    </defs>
    <title>MARKETISA Logo - Simbolo - Cor2 - Fundo Claro</title>
    <path
      fill="#3362f1"
      d="M392.75,261.93,173.25,526.39a43.31,43.31,0,0,0-10,27.66V730a11.38,11.38,0,0,0,20.14,7.27L409.83,464.52V268.09A9.65,9.65,0,0,0,392.75,261.93Z"
    />
    <path
      fill="#3362f1"
      d="M824.54,261.93,595.06,538.42V720.78A19.89,19.89,0,0,0,615,740.68H821.72a19.9,19.9,0,0,0,19.9-19.9V268.09A9.65,9.65,0,0,0,824.54,261.93Z"
    />
    <path
      fill="#3362f1"
      d="M578,261.93,409.83,464.52V730A11.39,11.39,0,0,0,430,737.31L595.06,538.42V268.09A9.65,9.65,0,0,0,578,261.93Z"
    />
    <path
      fill="url(#gradient1)"
      d="M389.52,260.28,168.44,526.64a43.64,43.64,0,0,0-10.06,27.87V731.76a11.46,11.46,0,0,0,20.29,7.32L406.72,464.33V266.49A9.72,9.72,0,0,0,389.52,260.28Z"
    />
    <path
      fill="url(#gradient2)"
      d="M824.42,260.28,593.28,538.76V722.43a20,20,0,0,0,20,20H821.58a20,20,0,0,0,20-20V266.49A9.72,9.72,0,0,0,824.42,260.28Z"
    />
    <path
      fill="url(#gradient3)"
      d="M576.08,260.28,406.72,464.33V731.76A11.46,11.46,0,0,0,427,739.08L593.28,538.76V266.49A9.72,9.72,0,0,0,576.08,260.28Z"
    />
  </svg>
);

export default MarketisaLogo;
