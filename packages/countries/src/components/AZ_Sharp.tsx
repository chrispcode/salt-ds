// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AZ_SharpProps = CountrySymbolProps;

const AZ_Sharp = forwardRef<SVGSVGElement, AZ_SharpProps>(function AZ_Sharp(
  props: AZ_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AZ_Sharp"
      aria-label="Azerbaijan"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AZ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AZ-a)`}>
        <path fill="#009B77" d="M0 50v-7h72v7z" />
        <path fill="#DD2033" d="M0 43V7h72v36z" />
        <path
          fill="#F5F7F8"
          d="m45 16 2.215 4.751 5.003-1.186-2.24 4.739L54 27.576l-5.008 1.158.013 5.266L45 30.705 40.995 34l.014-5.266L36 27.576l4.023-3.272-2.24-4.739 5.002 1.186L45 16Z"
        />
        <path fill="#0091DA" d="M0 7V0h72v7z" />
        <path
          fill="#F5F7F8"
          d="M37.998 14.272A11.539 11.539 0 0 0 35.5 14C29.149 14 24 19.149 24 25.5S29.149 37 35.5 37c.858 0 1.694-.094 2.498-.272A13.437 13.437 0 0 1 30.5 39C23.044 39 17 32.956 17 25.5S23.044 12 30.5 12c2.774 0 5.353.837 7.498 2.272Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default AZ_Sharp;
