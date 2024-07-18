// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type IDProps = CountrySymbolProps;

const ID = forwardRef<SVGSVGElement, IDProps>(function ID(props: IDProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="ID"
      aria-label="Indonesia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-ID-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="rotate(180 36 36)"
        />
      </mask>
      <g mask={`url(#${uid}-ID-a)`}>
        <path fill="#DD2033" d="M72 0v36H0V0z" />
        <path fill="#F5F7F8" d="M72 36v36H0V36z" />
      </g>
    </CountrySymbol>
  );
});

export default ID;
