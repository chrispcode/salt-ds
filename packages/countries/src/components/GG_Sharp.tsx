import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type GG_SharpProps = CountrySymbolProps;

const GG_Sharp = forwardRef<SVGSVGElement, GG_SharpProps>(function GG_Sharp(
  props: GG_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GG_Sharp"
      aria-label="Guernsey"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-GG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GG-a)`}>
        <path fill="#F5F7F8" d="M0-11h72v72H0z" />
        <path fill="#DD2033" d="M24 50h24V37h24V13H48V0H24v13H0v24h24v13Z" />
        <path fill="#F1B434" d="M41 6H31v14H6v10h25v14h10V30h25V20H41V6Z" />
      </g>
    </CountrySymbol>
  );
});

export default GG_Sharp;
