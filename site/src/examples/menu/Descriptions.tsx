import { ReactElement } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuPanel,
  MenuTrigger,
  StackLayout,
  Text,
} from "@salt-ds/core";
import { MicroMenuIcon } from "@salt-ds/icons";

const features = [
  {
    name: "Account overview",
    id: "account_overview",
    description: " Your financial summary.",
  },
  {
    name: "Investment portfolio",
    id: "investment_portfolio",
    description: "Track and manage your investments.",
  },
  {
    name: "Budget planner",
    id: "budget_planner",
    description: "Create and monitor your financial goals.",
  },
];

export const Descriptions = (): ReactElement => {
  return (
    <Menu>
      <MenuTrigger>
        <Button variant="secondary" aria-label="Open Menu">
          <MicroMenuIcon aria-hidden />
        </Button>
      </MenuTrigger>
      <MenuPanel>
        {Object.values(features).map(({ name, description, id }) => (
          <MenuItem id={id}>
            <StackLayout
              gap={0.5}
              style={{
                paddingBlock:
                  "calc(var(--salt-spacing-100) + var(--salt-spacing-25))",
              }}
            >
              <Text>{name}</Text>
              <Text styleAs="label" color="secondary">
                {description}
              </Text>
            </StackLayout>
          </MenuItem>
        ))}
      </MenuPanel>
    </Menu>
  );
};
