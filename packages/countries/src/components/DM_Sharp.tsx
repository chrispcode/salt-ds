// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type DM_SharpProps = CountrySymbolProps;

const DM_Sharp = forwardRef<SVGSVGElement, DM_SharpProps>(function DM_Sharp(
  props: DM_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="DM_Sharp"
      aria-label="Dominica"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-DM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-DM-a)`}>
        <path fill="#008259" d="M0 0h72v50H0z" />
        <path fill="#F5F7F8" d="M40 0h8v29h24v8H48v13h-8V37H0v-8h40V0Z" />
        <path fill="#FBD381" d="M24 0h8v13h40v8H32v29h-8V21H0v-8h24V0Z" />
        <path fill="#31373D" d="M40 0h-8v21H0v8h32v21h8V29h32v-8H40V0Z" />
        <circle cx="36.2" cy="25" r="20" fill="#DD2033" />
        <path fill="#005B33" d="M40.2 38h-4a6 6 0 0 1-6-6V21h10v17Z" />
        <path
          fill="#642F6C"
          d="M34.2 12h-2v9h-2v5c0 5.523 4.477 10 10 10V18a6 6 0 0 0-6-6Z"
        />
        <path fill="#FBD381" d="M32.2 12a3 3 0 0 0-3 3v2h3v-5Z" />
        <path
          fill="#008259"
          d="M37.2 21a3 3 0 0 1 3-3v4.948l3.573 10.401a6 6 0 0 1-3.726 7.624l-4.32-12.577A4.002 4.002 0 0 1 37.2 23.83V21Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default DM_Sharp;
