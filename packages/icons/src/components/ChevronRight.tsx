// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type ChevronRightIconProps = IconProps;

export const ChevronRightIcon = forwardRef<
  SVGSVGElement,
  ChevronRightIconProps
>(function ChevronRightIcon(props: ChevronRightIconProps, ref) {
  return (
    <Icon
      data-testid="ChevronRightIcon"
      aria-label="chevron right"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.308 6 2.5 1.599 3.492.5 9.5 6l-6.008 5.5-.992-1.099L7.308 6Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
