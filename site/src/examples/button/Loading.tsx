import { Button } from "@salt-ds/core";
import { ReactElement, useState } from "react";

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

export const Loading = (): ReactElement => {
  const [loading, handleClick] = useLoadOnClick();

  return (
    <Button
      sentiment="accented"
      appearance="solid"
      loading={loading}
      onClick={handleClick}
    >
      Send message
    </Button>
  );
};
