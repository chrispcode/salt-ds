import figma from "@figma/code-connect";
import { Badge } from "../src/badge/Badge";

/**
 * -- This file was auto-generated by Code Connect --
 * None of your props could be automatically mapped to Figma properties.
 * You should update the `props` object to include a mapping from your
 * code props to Figma properties, and update the `example` function to
 * return the code example you'd like to see in Figma
 */

figma.connect(
  Badge,
  "https://www.figma.com/design/ChsbbO7pLomT4F5H6tQyLP/Salt-(Next)-Components-%26-Patterns?node-id=9106%3A83184",
  {
    props: {
      value: figma.string("Badge value"),
      // No matching props could be found for these Figma properties:
    },
    example: ({ value }) => <Badge value={value} />,
  },
);

// Manual created - Dot badge
figma.connect(
  Badge,
  "https://www.figma.com/design/ChsbbO7pLomT4F5H6tQyLP/Salt-(Next)-Components-%26-Patterns?node-id=31292-7021",
  {
    props: {},
    example: () => <Badge />,
  },
);
