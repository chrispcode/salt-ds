// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ME_SharpProps = CountrySymbolProps;

const ME_Sharp = forwardRef<SVGSVGElement, ME_SharpProps>(function ME_Sharp(
  props: ME_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="ME_Sharp"
      aria-label="Montenegro"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-ME-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-ME-a)`}>
        <path fill="#F1B434" d="M72 50H0V0h72z" />
        <path fill="#DD2033" d="M67 45H5V5h62z" />
        <path
          fill="#F1B434"
          d="M35.827 13.937c1.627 0 2.945-1.329 2.945-2.968 0-1.64-1.319-2.969-2.945-2.969s-2.944 1.33-2.944 2.969c0 1.64 1.318 2.968 2.944 2.968Z"
        />
        <path
          fill="#F1B434"
          d="M39.558 18.225c1.263-.634 2.886-.798 3.993-.722l.265-3.844c-1.556-.107-3.924.087-5.988 1.122a7.804 7.804 0 0 0-2.146 1.565 7.816 7.816 0 0 0-2.126-1.543c-2.064-1.036-4.432-1.23-5.987-1.122l.265 3.844c1.106-.077 2.73.088 3.993.721 1.138.572 1.931 1.464 1.931 3.136v.657l-10.453-2.824a2.641 2.641 0 0 0 1.85 3.232l8.603 2.323v.683L23.09 22.572a2.641 2.641 0 0 0 1.85 3.231l8.467 2.287-.538.538-9.362-2.529a2.641 2.641 0 0 0 1.851 3.232l5.36 1.448-4.38 4.377 2.726 2.724 4.813-4.81-2.032 5.077L35.699 42l3.855-3.853-2.038-5.091 4.805 4.802 2.725-2.724-4.444-4.442 5.04-1.361a2.641 2.641 0 0 0 1.85-3.232l-9.041 2.443-.538-.538 8.146-2.2a2.641 2.641 0 0 0 1.851-3.232l-10.284 2.777v-.682l8.219-2.22a2.641 2.641 0 0 0 1.85-3.232l-10.069 2.72v-.575c0-1.672.794-2.564 1.932-3.135Z"
        />
        <path
          fill="#005EB8"
          d="M28.825 20.534h13.088v4.819c0 4.263-2.59 8.1-6.544 9.694a10.453 10.453 0 0 1-6.544-9.694v-4.819Z"
        />
        <mask
          id={`${uid}-ME-b`}
          x="28"
          y="20"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#005EB8"
            d="M28.825 20.534h13.088v4.819c0 4.263-2.59 8.1-6.544 9.694a10.453 10.453 0 0 1-6.544-9.694v-4.819Z"
          />
        </mask>
        <g mask={`url(#${uid}-ME-b)`}>
          <path fill="#009B77" d="M28.825 27.131h13.088v7.916H28.825z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default ME_Sharp;
