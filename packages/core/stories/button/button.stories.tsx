import { Button, FlexLayout, FlowLayout, StackLayout } from "@salt-ds/core";
import {
  DownloadIcon,
  RefreshIcon,
  SearchIcon,
  SendIcon,
  SettingsSolidIcon,
  SyncIcon,
} from "@salt-ds/icons";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Core/Button",
  component: Button,
  // Manually specify onClick action to test Actions panel
  // react-docgen-typescript-loader doesn't support detecting interface extension
  // https://github.com/strothj/react-docgen-typescript-loader/issues/47
  argTypes: { onClick: { action: "clicked" } },
} as Meta<typeof Button>;

const SingleButtonTemplate: StoryFn<typeof Button> = (props) => {
  return <Button {...props} />;
};

const ButtonGridTemplate: StoryFn<typeof Button> = (props) => {
  return (
    <FlowLayout>
      <Button {...props}>Submit</Button>
      <Button aria-label="Search" {...props}>
        <SearchIcon aria-hidden />
      </Button>
      <Button {...props}>
        <SearchIcon aria-hidden />
        Search
      </Button>
    </FlowLayout>
  );
};

const AppearanceGridTemplate: StoryFn<typeof Button> = (props) => {
  return (
    <FlowLayout>
      <Button appearance="solid" {...props}>
        Solid
      </Button>
      <Button appearance="bordered" {...props}>
        Bordered
      </Button>
      <Button appearance="transparent" {...props}>
        Transparent
      </Button>
    </FlowLayout>
  );
};

export const Default = SingleButtonTemplate.bind({});
Default.args = {
  children: "Activate",
};

export const Accented = AppearanceGridTemplate.bind({});
Accented.args = {
  sentiment: "accented",
};

export const Neutral = AppearanceGridTemplate.bind({});
Neutral.args = {
  sentiment: "neutral",
};

export const Positive = AppearanceGridTemplate.bind({});
Positive.args = {
  sentiment: "positive",
};

export const Negative = AppearanceGridTemplate.bind({});
Negative.args = {
  sentiment: "negative",
};

export const Caution = AppearanceGridTemplate.bind({});
Caution.args = {
  sentiment: "caution",
};

export const Disabled: StoryFn = () => {
  return (
    <StackLayout gap={3}>
      <FlowLayout>
        <Button appearance="solid" sentiment="accented" disabled>
          Solid
        </Button>
        <Button appearance="bordered" sentiment="accented" disabled>
          Bordered
        </Button>
        <Button appearance="transparent" sentiment="accented" disabled>
          Transparent
        </Button>
      </FlowLayout>
      <FlowLayout>
        <Button appearance="solid" sentiment="neutral" disabled>
          Solid
        </Button>
        <Button appearance="bordered" sentiment="neutral" disabled>
          Bordered
        </Button>
        <Button appearance="transparent" sentiment="neutral" disabled>
          Transparent
        </Button>
      </FlowLayout>
      <FlowLayout>
        <Button appearance="solid" sentiment="positive" disabled>
          Solid
        </Button>
        <Button appearance="bordered" sentiment="positive" disabled>
          Bordered
        </Button>
        <Button appearance="transparent" sentiment="positive" disabled>
          Transparent
        </Button>
      </FlowLayout>
      <FlowLayout>
        <Button appearance="solid" sentiment="negative" disabled>
          Solid
        </Button>
        <Button appearance="bordered" sentiment="negative" disabled>
          Bordered
        </Button>
        <Button appearance="transparent" sentiment="negative" disabled>
          Transparent
        </Button>
      </FlowLayout>
      <FlowLayout>
        <Button appearance="solid" sentiment="caution" disabled>
          Solid
        </Button>
        <Button appearance="bordered" sentiment="caution" disabled>
          Bordered
        </Button>
        <Button appearance="transparent" sentiment="caution" disabled>
          Transparent
        </Button>
      </FlowLayout>
    </StackLayout>
  );
};

export const FocusableWhenDisabled = SingleButtonTemplate.bind({});
FocusableWhenDisabled.args = {
  focusableWhenDisabled: true,
  disabled: true,
  children: "Save as draft",
};

export const WithIcon: StoryFn<typeof Button> = () => {
  return (
    <FlexLayout>
      <Button sentiment="accented">
        Send <SendIcon aria-hidden />
      </Button>
      <Button>
        <SearchIcon aria-hidden /> Search
      </Button>
      <Button appearance="transparent">
        Setting <SettingsSolidIcon aria-hidden />
      </Button>
      <Button aria-label="download">
        <DownloadIcon aria-hidden />
      </Button>
    </FlexLayout>
  );
};

function useLoadOnClick() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return [loading, handleClick] as const;
}

export const Loading: StoryFn = () => {
  const [accentSolidLoading, setAccentSolidLoading] = useLoadOnClick();
  const [accentOutlineLoading, setAccentOutlineLoading] = useLoadOnClick();
  const [accentTransparentLoading, setAccentTransparentLoading] =
    useLoadOnClick();
  const [neutralSolidLoading, setNeutralSolidLoading] = useLoadOnClick();
  const [neutralOutlineLoading, setNeutralOutlineLoading] = useLoadOnClick();
  const [neutralTransparentLoading, setNeutralTransparentLoading] =
    useLoadOnClick();

  return (
    <StackLayout gap={3}>
      <FlowLayout>
        <Button
          sentiment="accented"
          appearance="solid"
          loading={accentSolidLoading}
          onClick={setAccentSolidLoading}
        >
          <SendIcon aria-hidden />
          Send Email
        </Button>
        <Button
          sentiment="accented"
          appearance="bordered"
          loading={accentOutlineLoading}
          onClick={setAccentOutlineLoading}
        >
          <SyncIcon aria-hidden />
          Sync Files
        </Button>
        <Button
          sentiment="accented"
          appearance="transparent"
          loading={accentTransparentLoading}
          onClick={setAccentTransparentLoading}
        >
          <RefreshIcon aria-hidden />
          Refresh Page
        </Button>
      </FlowLayout>
      <FlowLayout>
        <Button
          sentiment="neutral"
          appearance="solid"
          loading={neutralSolidLoading}
          onClick={setNeutralSolidLoading}
        >
          <SendIcon aria-hidden />
          Send Email
        </Button>
        <Button
          sentiment="neutral"
          appearance="bordered"
          loading={neutralOutlineLoading}
          onClick={setNeutralOutlineLoading}
        >
          <SyncIcon aria-hidden />
          Sync Files
        </Button>
        <Button
          sentiment="neutral"
          appearance="transparent"
          loading={neutralTransparentLoading}
          onClick={setNeutralTransparentLoading}
        >
          <RefreshIcon aria-hidden />
          Refresh Page
        </Button>
      </FlowLayout>
    </StackLayout>
  );
};

export const FullWidth: StoryFn<typeof Button> = () => {
  return (
    <StackLayout style={{ width: "98%" }}>
      <Button variant="primary">Primary full width Button</Button>
      <Button variant="secondary">Secondary full width Button</Button>
      <Button variant="cta">Cta full width Button</Button>
    </StackLayout>
  );
};

export const CTA = ButtonGridTemplate.bind({});
CTA.args = {
  variant: "cta",
};

export const Primary = ButtonGridTemplate.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = ButtonGridTemplate.bind({});
Secondary.args = {
  variant: "secondary",
};
