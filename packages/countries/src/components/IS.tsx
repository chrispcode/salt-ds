// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";
import { useId } from "@salt-ds/core";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ISProps = CountrySymbolProps;

const IS = forwardRef<SVGSVGElement, ISProps>(function IS(props: ISProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="IS"
      aria-label="Iceland"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-IS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-IS-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M20.4 72h-6V47.7H.4v-6h14V30.3H.4v-6h14V0h6v24.3h11.4V0h6v24.3h34.6v6H37.8v11.4h34.6v6H37.8V72h-6V47.7H20.4V72Zm11.4-41.7H20.4v11.4h11.4V30.3Z"
          clipRule="evenodd"
        />
        <path fill="#DD2033" d="M20 72h12V42h40V30H32V0H20v30H0v12h20v30Z" />
      </g>
    </CountrySymbol>
  );
});

export default IS;
