// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SG_SharpProps = CountrySymbolProps;

const SG_Sharp = forwardRef<SVGSVGElement, SG_SharpProps>(function SG_Sharp(
  props: SG_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SG_Sharp"
      aria-label="Singapore"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SG-a)`}>
        <path fill="#DD2033" d="M72 0v28H0V0z" />
        <path
          fill="#F5F7F8"
          d="M72 28v22H0V28zm-49.617-4.668c1.065.852 2.23 1.49 3.44 1.922a11.23 11.23 0 0 1-9.428-2.203c-4.857-3.88-5.65-10.963-1.769-15.82 2.92-3.655 7.654-5.008 11.887-3.8a10.991 10.991 0 0 0-6.173 3.862c-3.88 4.857-2.966 12.038 2.043 16.04ZM35.408 5.811 36.6 3.114l1.192 2.697 2.808.359-2.07 2.026.542 2.918L36.6 9.448l-2.472 1.666.543-2.918-2.07-2.026 2.807-.359Z"
        />
        <path
          fill="#F5F7F8"
          d="M27.408 11.811 28.6 9.114l1.192 2.697 2.808.359-2.07 2.026.542 2.918-2.472-1.666-2.472 1.666.543-2.918-2.07-2.026 2.807-.359ZM44.6 9.114l-1.192 2.697-2.808.359 2.071 2.026-.543 2.918 2.472-1.666 2.472 1.666-.543-2.918L48.6 12.17l-2.808-.359L44.6 9.114ZM30.408 20.811l1.192-2.697 1.192 2.697 2.808.359-2.07 2.026.542 2.918-2.472-1.666-2.472 1.666.543-2.918-2.07-2.026 2.807-.359ZM41.6 18.114l-1.192 2.697-2.808.359 2.071 2.026-.543 2.918 2.472-1.666 2.472 1.666-.543-2.918L45.6 21.17l-2.808-.359-1.192-2.697Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SG_Sharp;
