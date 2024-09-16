import { SaltProviderNext, Switch } from "@salt-ds/core";
import { SaltProvider } from "@salt-ds/core";
import clsx from "clsx";
import {
  type ChangeEvent,
  type ElementType,
  type FC,
  useEffect,
  useState,
} from "react";
import useIsMobileView from "../../utils/useIsMobileView";
import { Pre } from "../mdx/pre";
import { useLivePreviewControls } from "./useLivePreviewControls";

import styles from "./LivePreview.module.css";

type LivePreviewProps = {
  componentName: string;
  exampleName: string;
};

export const LivePreview: FC<LivePreviewProps> = ({
  componentName,
  exampleName,
}) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const isMobileView = useIsMobileView();

  const [ComponentExample, setComponentExample] = useState<{
    Example?: ElementType;
    sourceCode: string;
  }>({
    Example: undefined,
    sourceCode: "",
  });
  useEffect(() => {
    async function fetchExample() {
      const Example = (
        (await import(`../../examples/${componentName}`)) as Record<
          string,
          ElementType
        >
      )[exampleName];
      const sourceCode = (
        (await import(
          `../../examples/${componentName}/${exampleName}.tsx?raw`
        )) as Record<string, string>
      ).default;

      return { Example, sourceCode };
    }

    fetchExample()
      .then((data) => setComponentExample(data))
      .catch((e) => console.error(`Failed to load example ${exampleName}`, e));
  }, [exampleName, componentName]);

  const { density, mode, accent, corner, themeNext } = useLivePreviewControls();

  const handleShowCodeToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const newShowCode = event.target.checked;
    setShowCode(newShowCode);
  };

  const ChosenSaltProvider = themeNext ? SaltProviderNext : SaltProvider;

  return (
    <>
      <div className={styles.container}>
        <div
          className={clsx(styles.componentPreview, {
            [styles.smallViewport]: isMobileView,
          })}
        >
          <ChosenSaltProvider mode={mode} accent={accent} corner={corner}>
            <div className={styles.exampleWithSwitch}>
              <div className={styles.example}>
                <ChosenSaltProvider density={density}>
                  {ComponentExample.Example && <ComponentExample.Example />}
                </ChosenSaltProvider>
              </div>
              <ChosenSaltProvider density="medium">
                <Switch
                  checked={showCode}
                  onChange={handleShowCodeToggle}
                  className={styles.switch}
                  label="Show code"
                />
              </ChosenSaltProvider>
            </div>
          </ChosenSaltProvider>
        </div>

        {showCode && (
          <Pre className={styles.codePreview}>
            <div className="language-tsx">{ComponentExample.sourceCode}</div>
          </Pre>
        )}
      </div>
    </>
  );
};
