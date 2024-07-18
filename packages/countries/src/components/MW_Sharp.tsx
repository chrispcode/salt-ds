// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MW_SharpProps = CountrySymbolProps;

const MW_Sharp = forwardRef<SVGSVGElement, MW_SharpProps>(function MW_Sharp(
  props: MW_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MW_Sharp"
      aria-label="Malawi"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-MW-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MW-a)`}>
        <path fill="#009B77" d="M0 50V34h72v16z" />
        <path fill="#DD2033" d="M0 34V18h72v16z" />
        <path fill="#31373D" d="M0 18V0h72v18z" />
        <path
          fill="#DD2033"
          d="M48 16H22l5.312-2.627-2.829-5.407 5.768 1.16L30.983 3 35 7.505 39.018 3l.73 6.125 5.769-1.16-2.829 5.409L48 16Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default MW_Sharp;
