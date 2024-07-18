// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ASProps = CountrySymbolProps;

const AS = forwardRef<SVGSVGElement, ASProps>(function AS(props: ASProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AS"
      aria-label="American Samoa"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-AS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-AS-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#DD2033" d="m-11 36 83 42V-6l-83 42Z" />
        <path fill="#F5F7F8" d="m5 36 83 42V-6L5 36Z" />
        <path
          fill="#936846"
          d="M60 35h-4c1.079-1.336.863-3.131-.352-4.385a3.475 3.475 0 0 0 0-4.807l-.078.08c1.288-1.328 1.365-3.56.078-4.888L37 40.23c1.287 1.328 3.338 1.313 4.625-.015l.36-.338 8.929-.838V43h3.029v-4.244l4.543-.426L60 35Z"
        />
        <path
          fill="#FF9E42"
          d="M55.648 30.615c1.215 1.254 1.43 3.05.352 4.385h-3l-6.676-4.385L55.648 21a3.475 3.475 0 0 1 0 4.808 3.475 3.475 0 0 1 0 4.807Z"
        />
        <path fill="#F1B434" d="M37.068 45 34 43.5l3.068-1.5H57v3H37.068Z" />
      </g>
    </CountrySymbol>
  );
});

export default AS;
