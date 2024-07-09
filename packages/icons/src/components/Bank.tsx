// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type BankIconProps = IconProps;

export const BankIcon = forwardRef<SVGSVGElement, BankIconProps>(
  function BankIcon(props: BankIconProps, ref) {
    return (
      <Icon
        data-testid="BankIcon"
        aria-label="bank"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M5.5 4V3h1v1h-1Z" />
        <path
          fillRule="evenodd"
          d="m6 0 6 6h-2v5h2v1H0v-1h2V6H0l6-6ZM3 6v5h1V6H3Zm2 0v5h2V6H5Zm3 0v5h1V6H8ZM6 1.414 9.586 5H2.414L6 1.414Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
