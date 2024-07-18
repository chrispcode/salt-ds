// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ZMProps = CountrySymbolProps;

const ZM = forwardRef<SVGSVGElement, ZMProps>(function ZM(props: ZMProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="ZM"
      aria-label="Zambia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-ZM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-ZM-a)`}>
        <path fill="#008259" d="M0 0h72v72H0z" />
        <path
          fill="#FF9E42"
          d="M60 34h12v38H60zm-16-8a8 8 0 0 1-8-8h24a8 8 0 0 1-8 8h-8Z"
        />
        <path fill="#31373D" d="M48 34h12v38H48z" />
        <path fill="#DD2033" d="M36 34h12v38H36z" />
      </g>
    </CountrySymbol>
  );
});

export default ZM;
