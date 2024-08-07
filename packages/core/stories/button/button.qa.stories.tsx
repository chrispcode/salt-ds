import { Button, StackLayout } from "@salt-ds/core";
import { SearchIcon } from "@salt-ds/icons";
import type { Meta, StoryFn } from "@storybook/react";
import {
  QAContainer,
  QAContainerNoStyleInjection,
  type QAContainerNoStyleInjectionProps,
  type QAContainerProps,
} from "docs/components";

export default {
  title: "Core/Button/Button QA",
  component: Button,
  // Manually specify onClick action to test Actions panel
  // react-docgen-typescript-loader doesn't support detecting interface extension
  // https://github.com/strothj/react-docgen-typescript-loader/issues/47
  argTypes: { onClick: { action: "clicked" } },
} as Meta<typeof Button>;

export const AllVariantsGrid: StoryFn<QAContainerProps> = (props) => (
  <QAContainer
    height={500}
    width={1300}
    itemWidthAuto
    itemPadding={4}
    {...props}
  >
    <StackLayout direction="row" gap={1}>
      <Button variant="primary">Button</Button>
      <Button variant="primary">
        <SearchIcon />
      </Button>
      <Button variant="primary">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">
        <SearchIcon />
      </Button>
      <Button variant="secondary">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button variant="cta">Button</Button>
      <Button variant="cta">
        <SearchIcon />
      </Button>
      <Button variant="cta">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="accent" appearance="solid">
        Button
      </Button>
      <Button color="accent" appearance="solid">
        <SearchIcon />
      </Button>
      <Button color="accent" appearance="solid">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="accent" appearance="outline">
        Button
      </Button>
      <Button color="accent" appearance="outline">
        <SearchIcon />
      </Button>
      <Button color="accent" appearance="outline">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="accent" appearance="transparent">
        Button
      </Button>
      <Button color="accent" appearance="transparent">
        <SearchIcon />
      </Button>
      <Button color="accent" appearance="transparent">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="neutral" appearance="solid">
        Button
      </Button>
      <Button color="neutral" appearance="solid">
        <SearchIcon />
      </Button>
      <Button color="neutral" appearance="solid">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="neutral" appearance="outline">
        Button
      </Button>
      <Button color="neutral" appearance="outline">
        <SearchIcon />
      </Button>
      <Button color="neutral" appearance="outline">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="neutral" appearance="transparent">
        Button
      </Button>
      <Button color="neutral" appearance="transparent">
        <SearchIcon />
      </Button>
      <Button color="neutral" appearance="transparent">
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="accent" appearance="solid" loading>
        Button
      </Button>
      <Button color="accent" appearance="outline" loading>
        <SearchIcon />
      </Button>
      <Button color="accent" appearance="transparent" loading>
        <SearchIcon /> Button
      </Button>
    </StackLayout>
    <StackLayout direction="row" gap={1}>
      <Button color="neutral" appearance="solid" loading>
        Button
      </Button>
      <Button color="neutral" appearance="outline" loading>
        <SearchIcon />
      </Button>
      <Button color="neutral" appearance="transparent" loading>
        <SearchIcon /> Button
      </Button>
    </StackLayout>
  </QAContainer>
);

AllVariantsGrid.parameters = {
  chromatic: {
    disableSnapshot: false,
    modes: {
      theme: {
        themeNext: "disable",
      },
      themeNext: {
        themeNext: "enable",
        corner: "rounded",
        accent: "teal",
        // Ignore headingFont given font is not loaded
      },
    },
  },
};

export const NoStyleInjectionGrid: StoryFn<QAContainerNoStyleInjectionProps> = (
  props,
) => (
  <QAContainerNoStyleInjection height={500} width={1000} {...props}>
    <Button variant="primary">Button</Button>
    <Button variant="primary">
      <SearchIcon />
    </Button>
    <Button variant="primary">
      <SearchIcon /> Button
    </Button>
    <Button variant="secondary">Button</Button>
    <Button variant="secondary">
      <SearchIcon />
    </Button>
    <Button variant="secondary">
      <SearchIcon /> Button
    </Button>
    <Button variant="cta">Button</Button>
    <Button variant="cta">
      <SearchIcon />
    </Button>
    <Button variant="cta">
      <SearchIcon /> Button
    </Button>
    <Button color="accent" appearance="solid">
      Button
    </Button>
    <Button color="accent" appearance="solid">
      <SearchIcon />
    </Button>
    <Button color="accent" appearance="solid">
      <SearchIcon /> Button
    </Button>
    <Button color="accent" appearance="outline">
      Button
    </Button>
    <Button color="accent" appearance="outline">
      <SearchIcon />
    </Button>
    <Button color="accent" appearance="outline">
      <SearchIcon /> Button
    </Button>
    <Button color="accent" appearance="transparent">
      Button
    </Button>
    <Button color="accent" appearance="transparent">
      <SearchIcon />
    </Button>
    <Button color="accent" appearance="transparent">
      <SearchIcon /> Button
    </Button>
    <Button color="neutral" appearance="solid">
      Button
    </Button>
    <Button color="neutral" appearance="solid">
      <SearchIcon />
    </Button>
    <Button color="neutral" appearance="solid">
      <SearchIcon /> Button
    </Button>
    <Button color="neutral" appearance="outline">
      Button
    </Button>
    <Button color="neutral" appearance="outline">
      <SearchIcon />
    </Button>
    <Button color="neutral" appearance="outline">
      <SearchIcon /> Button
    </Button>
    <Button color="neutral" appearance="transparent">
      Button
    </Button>
    <Button color="neutral" appearance="transparent">
      <SearchIcon />
    </Button>
    <Button color="neutral" appearance="transparent">
      <SearchIcon /> Button
    </Button>
  </QAContainerNoStyleInjection>
);

NoStyleInjectionGrid.parameters = {
  chromatic: { disableSnapshot: false },
};
