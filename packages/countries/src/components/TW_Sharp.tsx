// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type TW_SharpProps = CountrySymbolProps;

const TW_Sharp = forwardRef<SVGSVGElement, TW_SharpProps>(function TW_Sharp(
  props: TW_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="TW_Sharp"
      aria-label="Taiwan (Province of China)"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-TW-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TW-a)`}>
        <path fill="#DD2033" d="M0 50V0h72v50z" />
        <path fill="#004692" d="M0 34V0h44v34z" />
        <path
          fill="#F5F7F8"
          d="m33 17-4.495 2.223 2.394 4.576-4.881-.982L25.4 28 22 24.188 18.6 28l-.618-5.183-4.88.981 2.393-4.576L11 17l4.495-2.223-2.394-4.575 4.88.981.62-5.183L22 9.812 25.4 6l.618 5.183 4.88-.981-2.393 4.576L33 17Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TW_Sharp;
