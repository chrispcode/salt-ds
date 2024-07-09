import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type COProps = CountrySymbolProps;

const CO = forwardRef<SVGSVGElement, COProps>(function CO(props: COProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="CO"
      aria-label="Colombia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-CO-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-CO-a)`}>
        <path fill="#DD2033" d="M0 72V54h72v18z" />
        <path fill="#F1B434" d="M0 36V0h72v36z" />
        <path fill="#004692" d="M0 54V36h72v18z" />
      </g>
    </CountrySymbol>
  );
});

export default CO;
