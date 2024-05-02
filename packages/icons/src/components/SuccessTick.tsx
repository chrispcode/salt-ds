// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type SuccessTickIconProps = IconProps;

export const SuccessTickIcon = forwardRef<SVGSVGElement, SuccessTickIconProps>(
  function SuccessTickIcon(props: SuccessTickIconProps, ref) {
    return (
      <Icon
        data-testid="SuccessTickIcon"
        aria-label="success tick"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="m3.871 8.033 6.187-6.187 1.061 1.06-7.248 7.248-2.99-2.99 1.06-1.061 1.93 1.93Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);
