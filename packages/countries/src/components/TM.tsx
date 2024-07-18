// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/utils";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type TMProps = CountrySymbolProps;

const TM = forwardRef<SVGSVGElement, TMProps>(function TM(props: TMProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="TM"
      aria-label="Turkmenistan"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-TM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-TM-a)`}>
        <path fill="#009B77" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="m37.906 11.084.894-2.022.894 2.022 2.106.27-1.553 1.519.407 2.189-1.854-1.25-1.854 1.25.407-2.19-1.553-1.519 2.106-.269Zm8 5 .894-2.022.894 2.022 2.106.27-1.553 1.519.407 2.188-1.854-1.25-1.854 1.25.407-2.188-1.553-1.52 2.106-.269Zm-8 4 .894-2.023.894 2.023 2.106.27-1.553 1.519.407 2.188-1.854-1.25-1.854 1.25.407-2.188-1.553-1.52 2.106-.269ZM30.8 22.061l-.894 2.023-2.106.27 1.553 1.519-.407 2.188 1.854-1.25 1.854 1.25-.407-2.188 1.553-1.52-2.106-.269-.894-2.023Zm8 5-.894 2.023-2.106.27 1.553 1.519-.407 2.189 1.854-1.25 1.854 1.25-.407-2.19 1.553-1.519-2.106-.269-.894-2.023Z"
        />
        <path
          fill="#F5F7F8"
          d="M55.489 20.648c-.756-4.376-3.345-7.961-6.806-10.055 5.786 1.25 10.519 5.893 11.588 12.085 1.405 8.144-4.057 15.885-12.2 17.291-5.171.893-10.18-.983-13.508-4.557 2.783 1.714 6.141 2.46 9.57 1.869 7.63-1.318 12.714-8.764 11.356-16.633Z"
        />
        <path fill="#DD2033" d="M-.2 72V0h24v72z" />
        <path
          fill="#E26E00"
          d="m19.3 14 4.5 4.5v-9L19.3 14Zm0 15.5 4.5 4.5v-9l-4.5 4.5Zm-15 0L-.2 34v-9l4.5 4.5Zm15 15.5 4.5 4.5v-9L19.3 45Zm-15 0-4.5 4.5v-9L4.3 45Zm15 15.5 4.5 4.5v-9l-4.5 4.5Z"
        />
        <path
          fill="#009B77"
          fillRule="evenodd"
          d="M14.998 34H9.602L7.8 35.442v3.116L9.602 40h5.396l1.802-1.442v-3.116L14.998 34Zm1.052-3h-7.5L4.8 34v6l3.75 3h7.5l3.75-3v-6l-3.75-3Zm-1.052 18H9.602L7.8 50.442v3.116L9.602 55h5.396l1.802-1.442v-3.116L14.998 49Zm1.052-3h-7.5L4.8 49v6l3.75 3h7.5l3.75-3v-6l-3.75-3Zm-1.052-27H9.602L7.8 20.442v3.116L9.602 25h5.396l1.802-1.442v-3.116L14.998 19Zm1.052-3h-7.5L4.8 19v6l3.75 3h7.5l3.75-3v-6l-3.75-3ZM14.998 4H9.602L7.8 5.442v3.116L9.602 10h5.396L16.8 8.558V5.442L14.998 4Zm1.052-3h-7.5L4.8 4v6l3.75 3h7.5l3.75-3V4l-3.75-3Zm-1.052 63H9.602L7.8 65.442v3.116L9.602 70h5.396l1.802-1.442v-3.116L14.998 64Zm1.052-3h-7.5L4.8 64v6l3.75 3h7.5l3.75-3v-6l-3.75-3Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default TM;
