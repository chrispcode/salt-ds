import { type ValidationStatus, makePrefixer } from "@salt-ds/core";
import {
  ErrorSolidIcon,
  ProgressInprogressIcon,
  StepActiveIcon,
  StepDefaultIcon,
  StepSuccessIcon,
  WarningSolidIcon,
} from "@salt-ds/icons";
import { useComponentCssInjection } from "@salt-ds/styles";
import { useWindow } from "@salt-ds/window";
import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, useEffect } from "react";
import { TrackerConnector } from "../TrackerConnector";

import {
  useSteppedTrackerContext,
  useTrackerStepContext,
} from "../SteppedTrackerContext";

import trackerStepCss from "./TrackerStep.css";

const withBaseName = makePrefixer("saltTrackerStep");

type StageOptions = "pending" | "completed" | "inprogress";
type StatusOptions = Extract<ValidationStatus, "warning" | "error">;
type Depth = 0 | 1 | 2;

export interface TrackerStepProps {
  /**
   * The stage of the step: "pending" or "completed" (note, "active" is derived from "activeStep" in parent SteppedTracker component)
   */
  stage?: StageOptions;
  /**
   * The status of the step: warning or error
   *
   * If the stage is completed or active, the status prop will be ignored
   */
  status?: StatusOptions;
  /**
   * The nesting depth of the TrackerStep
   */
  depth?: Depth;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

interface TrackerStepLiProps
  extends TrackerStepProps,
    ComponentPropsWithoutRef<"li"> {}

interface TrackerStepDivProps
  extends TrackerStepProps,
    ComponentPropsWithoutRef<"div"> {}

const iconMap = {
  pending: StepDefaultIcon,
  active: StepActiveIcon,
  completed: StepSuccessIcon,
  warning: WarningSolidIcon,
  error: ErrorSolidIcon,
  inprogress: ProgressInprogressIcon,
};

const useCheckWithinSteppedTracker = (isWithinSteppedTracker: boolean) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (!isWithinSteppedTracker) {
        console.error(
          "The TrackerStep component must be placed within a SteppedTracker component",
        );
      }
    }
  }, [isWithinSteppedTracker]);
};

const parseIconName = ({
  stage,
  status,
  active,
}: {
  stage: StageOptions;
  status?: StatusOptions;
  active: boolean;
}) => {
  if (stage === "completed") return "completed";
  if (active) return "active";
  if (status) return status;
  return stage;
};

export const TrackerStep = (props: TrackerStepProps) => {
  const {
    stage = "pending",
    status,
    style,
    className,
    children,
    depth = 0,
    ...restProps
  } = props;

  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-tracker-step",
    css: trackerStepCss,
    window: targetWindow,
  });

  const { activeStep, totalSteps, isWithinSteppedTracker } =
    useSteppedTrackerContext();
  const { stepNumber, parent } = useTrackerStepContext();

  useCheckWithinSteppedTracker(isWithinSteppedTracker);

  const isActive = activeStep === stepNumber;
  const iconName = parseIconName({ stage, status, active: isActive });

  const Icon = iconMap[iconName];
  const connectorState = activeStep > stepNumber ? "active" : "default";
  const hasConnector = stepNumber < totalSteps - 1;
  const depthClass = withBaseName(`depth-${depth}`);
  const hierarchy = parent ? "parent" : "child";
  const iconSize = depth > 0 ? 1 : 1.5;

  const innerStyle = {
    ...style,
    "--saltTrackerStep-width": `${100 / totalSteps}%`,
  };

  const renderContainer = parent
    ? (props: TrackerStepDivProps) => <div {...props} />
    : (props: TrackerStepLiProps) => <li {...props} />;

  const containerClass = clsx(
    withBaseName(),
    withBaseName(`stage-${stage}`),
    withBaseName(`status-${status}`),
    withBaseName(hierarchy),
    {
      [withBaseName("active")]: isActive,
    },
    depthClass,
    className,
  );
  const ariaCurrent = isActive ? "step" : undefined;

  return renderContainer({
    className: containerClass,
    style: innerStyle,
    "aria-current": ariaCurrent,
    "aria-label": `Step ${stepNumber + 1} (${stage}${status ? `, ${status}` : ""})`,
    ...restProps,
    children: (
      <>
        <div className={withBaseName("indicator")} aria-hidden="true">
          <Icon size={iconSize} />
        </div>
        {hasConnector && <TrackerConnector state={connectorState} />}
        <div className={withBaseName("body")}>{children}</div>
      </>
    ),
  });
};
