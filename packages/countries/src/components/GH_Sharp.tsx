// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type GH_SharpProps = CountrySymbolProps;

const GH_Sharp = forwardRef<SVGSVGElement, GH_SharpProps>(function GH_Sharp(
  props: GH_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GH_Sharp"
      aria-label="Ghana"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-GH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GH-a)`}>
        <path fill="#005B33" d="M0 50V37h72v13z" />
        <path fill="#FBD381" d="M0 37V13h72v24z" />
        <path fill="#DD2033" d="M0 13V0h72v13z" />
        <path
          fill="#31373D"
          d="m36 15-2.98 6.742-7.02.897 5.177 5.064L29.82 35 36 30.833 42.18 35l-1.357-7.297L46 22.64l-7.02-.897L36 15Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default GH_Sharp;
