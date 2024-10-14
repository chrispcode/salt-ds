import { H4, Text, makePrefixer } from "@salt-ds/core";
import { useComponentCssInjection } from "@salt-ds/styles";
import { useWindow } from "@salt-ds/window";
import clsx from "clsx";
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import overlayHeaderCss from "./OverlayHeader.css";

const withBaseName = makePrefixer("saltOverlayHeader");

export interface OverlayPanelContentProps
  extends ComponentPropsWithoutRef<"div"> {
  /**
   * Description text is displayed just below the header
   **/
  description?: ReactNode;
  /**
   * Actions to be displayed in header
   */
  actions?: ReactNode;
  /**
   * Header text
   */
  header?: ReactNode;
  /**
   * The id of the Overlay Header, used for aria-labelledby on OverlayPanel
   **/
  id?: string;
  /**
   * Preheader text is displayed just above the header
   **/
  preheader?: ReactNode;
}

export const OverlayHeader = forwardRef<
  HTMLDivElement,
  OverlayPanelContentProps
>(function OverlayPanelContent(props, ref) {
  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-overlay-panel-content",
    css: overlayHeaderCss,
    window: targetWindow,
  });

  const { className, description, header, actions, id, preheader, ...rest } =
    props;

  return (
    <div className={clsx(withBaseName(), className)} {...rest} ref={ref}>
      <div className={withBaseName("container")}>
        {preheader && (
          <Text className={withBaseName("preheader")}>{preheader}</Text>
        )}
        {header && (
          <H4 id={id} className={withBaseName("header")}>
            {header}
          </H4>
        )}
        {description && (
          <Text color="secondary" className={withBaseName("description")}>
            {description}
          </Text>
        )}
      </div>
      {actions && (
        <div className={withBaseName("actionsContainer")}>{actions}</div>
      )}
    </div>
  );
});
