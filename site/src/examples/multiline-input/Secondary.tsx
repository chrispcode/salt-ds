import { MultilineInput } from "@salt-ds/core";
import type { ReactElement } from "react";

export const Secondary = (): ReactElement => (
  <MultilineInput
    variant="secondary"
    defaultValue="Value"
    style={{ maxWidth: "256px" }}
  />
);
