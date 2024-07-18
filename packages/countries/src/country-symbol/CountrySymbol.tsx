import { clsx } from "clsx";
import { type SVGAttributes, forwardRef } from "react";

import { useComponentCssInjection } from "@salt-ds/styles";
import { makePrefixer } from "@salt-ds/utils";
import { useWindow } from "@salt-ds/window";

import countrySymbolCss from "./CountrySymbol.css";

const withBaseName = makePrefixer("saltCountrySymbol");

export interface CountrySymbolProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Multiplier for the base Country Symbol size. Should be a positive integer to conform to the rest of the design system.
   */
  size?: number;
  /**
   * If `true`, the CountrySymbol will be sharp.
   */
  sharp?: boolean;
}

export const DEFAULT_COUNTRY_SYMBOL_SIZE = 1;

export const CountrySymbol = forwardRef<SVGSVGElement, CountrySymbolProps>(
  function CountrySymbol(
    {
      children,
      className,
      size = DEFAULT_COUNTRY_SYMBOL_SIZE,
      style: styleProp,
      sharp,
      ...rest
    },
    ref,
  ) {
    const targetWindow = useWindow();
    useComponentCssInjection({
      testId: "salt-country-symbol",
      css: countrySymbolCss,
      window: targetWindow,
    });

    const style = {
      ...styleProp,
      "--saltCountrySymbol-size-multiplier": `${size}`,
    };

    return (
      <svg
        className={clsx(
          withBaseName(),
          withBaseName(sharp ? "sharp" : "round"),
          className,
        )}
        style={style}
        role="img"
        {...rest}
        ref={ref}
      >
        <g aria-hidden>{children}</g>
      </svg>
    );
  },
);
