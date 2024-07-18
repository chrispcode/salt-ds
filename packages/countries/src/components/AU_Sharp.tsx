// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AU_SharpProps = CountrySymbolProps;

const AU_Sharp = forwardRef<SVGSVGElement, AU_SharpProps>(function AU_Sharp(
  props: AU_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AU_Sharp"
      aria-label="Australia"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AU-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AU-a)`}>
        <path fill="#004692" d="M0 0h72v50H0z" />
        <path
          fill="#F5F7F8"
          d="m31.514 31.353 1.97 4.223 4.446-1.054-1.992 4.212 3.576 2.909-4.452 1.029.012 4.68-3.56-2.928-3.56 2.929.012-4.681-4.452-1.03 3.576-2.908-1.991-4.212 4.446 1.054 1.97-4.223Zm22 .941 1.477 3.168 3.335-.791-1.494 3.159 2.682 2.181-3.339.772.01 3.511-2.67-2.196-2.671 2.196.01-3.51-3.34-.773 2.682-2.181-1.493-3.159 3.334.79 1.477-3.167Zm-9-20.529 1.23 2.64 2.78-.66-1.245 2.633 2.235 1.818-2.782.643.007 2.926-2.225-1.83-2.225 1.83.008-2.926-2.783-.643 2.235-1.818-1.245-2.633 2.78.66 1.23-2.64Zm10-7.843 1.23 2.64 2.78-.66-1.245 2.633 2.235 1.818-2.782.643.007 2.926-2.225-1.83-2.225 1.83.008-2.926-2.783-.643 2.235-1.818-1.245-2.633 2.78.66 1.23-2.64Zm10 9.804 1.23 2.639 2.78-.659-1.245 2.633 2.235 1.818-2.782.643.007 2.925-2.225-1.83-2.225 1.83.008-2.925-2.783-.643 2.235-1.818-1.245-2.633 2.78.659 1.23-2.64Z"
        />
        <ellipse cx="57.014" cy="26.961" fill="#F5F7F8" rx="2.5" ry="2.451" />
        <mask
          id={`${uid}-AU-b`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 30V0h36v30H0Z" />
        </mask>
        <g mask={`url(#${uid}-AU-b)`}>
          <path
            fill="#F5F7F8"
            d="m12.79 1.005-2.12 2.12 26.197 26.198 2.12-2.121L12.792 1.005ZM7.134 6.661l-3.536 3.536 26.197 26.197 3.536-3.535L7.134 6.66Z"
          />
          <path
            fill="#DD2033"
            d="m7.134 6.661 3.535-3.535 26.198 26.197-3.536 3.535L7.134 6.662Z"
          />
          <path fill="#F5F7F8" d="M6 35h4.002V9H36V5H6v30Z" />
          <path fill="#DD2033" d="M0 35h6.002V5h30V0H0v35Z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default AU_Sharp;
