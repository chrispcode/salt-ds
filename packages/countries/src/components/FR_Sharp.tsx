import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type FR_SharpProps = CountrySymbolProps;

const FR_Sharp = forwardRef<SVGSVGElement, FR_SharpProps>(function FR_Sharp(
  props: FR_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="FR_Sharp"
      aria-label="France"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-FR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-FR-a)`}>
        <path fill="#004692" d="M0 50h24V0H0z" />
        <path fill="#F5F7F8" d="M24 50h24V0H24z" />
        <path fill="#DD2033" d="M48 50h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default FR_Sharp;
