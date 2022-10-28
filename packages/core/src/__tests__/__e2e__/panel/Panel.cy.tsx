import { Panel } from "@jpmorganchase/uitk-core";

describe("GIVEN a Panel", () => {
  describe("children prop", () => {
    describe("AND a string is passed as a child", () => {
      it("THEN should display children", () => {
        const text = "Lorem Ipsum";
        cy.mount(<Panel>{text}</Panel>);
        cy.findByText(text).should("exist");
      });
    });

    describe("AND a node is passed as a child", () => {
      it("THEN should display children", () => {
        cy.mount(
          <Panel>
            <div data-testid="test" />
          </Panel>
        );
        cy.findByTestId("test").should("exist");
      });
    });
  });

  describe("emphasis prop", () => {
    describe('WHEN the "high" emphasis is input', () => {
      it('THEN should display "high" emphasis', () => {
        cy.mount(<Panel emphasis="high">Content</Panel>);
        cy.get("div").should("have.class", "uitkEmphasisHigh");
      });
    });
  });
});
