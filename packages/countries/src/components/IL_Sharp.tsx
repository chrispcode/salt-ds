// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type IL_SharpProps = CountrySymbolProps;

const IL_Sharp = forwardRef<SVGSVGElement, IL_SharpProps>(function IL_Sharp(
  props: IL_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="IL_Sharp"
      aria-label="Israel"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-IL-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-IL-a)`}>
        <path fill="#F5F7F8" d="M0 50V0h72v50z" />
        <path fill="#005EB8" d="M0 47v-7h72v7zm0-37V3h72v7z" />
        <path
          fill="#005EB8"
          fillRule="evenodd"
          d="m31.558 18 4.042-7 4.041 7h8.084l-4.042 7 4.041 7h-8.082L35.6 39l-4.041-7h-8.083l4.041-7-4.041-7h8.082Zm-1.154 2H26.94l1.732 3 1.732-3Zm-.577 5 2.886-5h5.774l2.887 5-2.887 5h-5.773l-2.887-5Zm-1.155 2-1.732 3h3.464l-1.732-3Zm5.196 5 1.732 3 1.732-3h-3.464Zm6.928-2h3.464l-1.732-3-1.732 3Zm1.732-7 1.733-3h-3.465l1.732 3Zm-5.196-5h-3.464l1.732-3 1.732 3Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default IL_Sharp;
