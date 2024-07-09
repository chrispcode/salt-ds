import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SC_SharpProps = CountrySymbolProps;

const SC_Sharp = forwardRef<SVGSVGElement, SC_SharpProps>(function SC_Sharp(
  props: SC_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SC_Sharp"
      aria-label="Seychelles"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SC-a)`}>
        <path fill="#004692" d="M0-11h72v72H0z" />
        <path fill="#009B77" d="M77 63V11L-3 63h80Z" />
        <path
          fill="#FBD381"
          d="m.278 53.766-1.374-2.986 52.59-61.103L77.901 8.86.278 53.766Z"
        />
        <path
          fill="#DD2033"
          d="m3.138 54.301-2.11-2.553L72.056-7l4.081 23.456-73 37.845Z"
        />
        <path
          fill="#F5F7F8"
          d="m7.95 52.766-1.174-2.6 67.398-35.152 3.571 14.11L7.949 52.766Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SC_Sharp;
