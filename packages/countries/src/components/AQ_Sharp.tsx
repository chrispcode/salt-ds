import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AQ_SharpProps = CountrySymbolProps;

const AQ_Sharp = forwardRef<SVGSVGElement, AQ_SharpProps>(function AQ_Sharp(
  props: AQ_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AQ_Sharp"
      aria-label="Antarctica"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AQ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AQ-a)`}>
        <path fill="#0091DA" d="M0-11h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="M25.338 18.263c-6.005 2.018-9.619-3.362-11.009-5.211-1.067.672-1 2.634-.834 3.53L18 24.315c.4 6.86 3.28 10.816 4.67 11.936 5.07 2.287 11.453 1.962 14.01 1.513 2.002 1.345.834 4.035 0 5.212 16.013 5.245 19.126-10.928 18.681-19.67l-3.002-1.512c.8-3.9-.334-7.453-1-8.742L34.177 7l-5.338 3.362c-.055 2.354-.834 7.229-3.502 7.901Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default AQ_Sharp;
