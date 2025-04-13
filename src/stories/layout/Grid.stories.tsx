import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "layout";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "SDS Layout/Grid",
  parameters: { layout: "centered" },
};
export default meta;

const renderChild = (text: string) => (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      padding: "0.5rem 1rem",
      background: "var(--sds-color-background-brand-default)",
      color: "var(--sds-color-text-brand-on-brand)",
      height: "100%",
      minHeight: "40px",
    }}
  >
    {text}
  </div>
);

export const StoryBasicGrid: StoryObj<typeof Grid> = {
  name: "Basic Grid",
  args: {
    columns: "repeat(3, 1fr)",
    rows: "auto",
    gap: "200",
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: [undefined, "100", "200", "300", "400", "600", "800"],
    },
    columns: {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "auto", "none", "repeat(3, 1fr)", "repeat(5, 1fr)"],
    },
    rows: {
      control: { type: "select" },
      options: ["1", "2", "3", "auto", "none", "repeat(2, auto)"],
    },
  },
  render: (args) => (
    <Grid {...args} container style={{ width: "100%", maxWidth: "800px" }}>
      {[...Array(9)].map((_, i) => (
        <div key={i}>{renderChild(`Item ${i + 1}`)}</div>
      ))}
    </Grid>
  ),
};

export const StoryGridWithItems: StoryObj<typeof Grid> = {
  name: "Grid with GridItems",
  args: {
    columns: "repeat(5, 1fr)",
    rows: "auto auto auto",
    gap: "200",
  },
  render: (args) => (
    <Grid {...args} container style={{ width: "100%", maxWidth: "800px" }}>
      <GridItem column="1 / span 3" row="1">
        {renderChild("Item 1 (spans 3 columns)")}
      </GridItem>
      <GridItem column="4 / span 2" row="1">
        {renderChild("Item 2 (spans 2 columns)")}
      </GridItem>
      <GridItem column="1" row="2 / span 2">
        {renderChild("Item 3 (spans 2 rows)")}
      </GridItem>
      <GridItem column="2 / span 2" row="2">
        {renderChild("Item 4")}
      </GridItem>
      <GridItem column="2 / span 2" row="3">
        {renderChild("Item 5")}
      </GridItem>
      <GridItem column="4" row="2 / span 2">
        {renderChild("Item 6 (spans 2 rows)")}
      </GridItem>
      <GridItem column="5" row="2 / span 2">
        {renderChild("Item 7 (spans 2 rows)")}
      </GridItem>
    </Grid>
  ),
};

export const StoryGridAreas: StoryObj<typeof Grid> = {
  name: "Grid Areas",
  args: {
    gap: "200",
  },
  render: (args) => (
    <Grid
      {...args}
      container
      style={{
        width: "100%",
        maxWidth: "800px",
        gridTemplateAreas: `
          "header header header header header"
          "sidebar main main main aside"
          "sidebar footer footer footer aside"
        `,
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "auto auto auto",
      }}
    >
      <GridItem area="header">
        {renderChild("Header")}
      </GridItem>
      <GridItem area="sidebar">
        {renderChild("Sidebar")}
      </GridItem>
      <GridItem area="main">
        {renderChild("Main Content")}
      </GridItem>
      <GridItem area="aside">
        {renderChild("Aside")}
      </GridItem>
      <GridItem area="footer">
        {renderChild("Footer")}
      </GridItem>
    </Grid>
  ),
};

export const StoryCardGrid: StoryObj<typeof Grid> = {
  name: "Card Grid Layout",
  args: {
    columns: "repeat(5, 1fr)",
    rows: "auto",
    gap: "400",
  },
  render: (args) => (
    <Grid {...args} container style={{ width: "100%", maxWidth: "800px" }}>
      <GridItem column="1 / span 3" row="1">
        {renderChild("Article 1")}
      </GridItem>
      <GridItem column="4 / span 2" row="1">
        {renderChild("Article 2")}
      </GridItem>
      <GridItem column="1" row="2 / span 2">
        {renderChild("Article 3")}
      </GridItem>
      <GridItem column="2 / span 2" row="2">
        {renderChild("Article 4")}
      </GridItem>
      <GridItem column="2 / span 2" row="3">
        {renderChild("Article 5")}
      </GridItem>
      <GridItem column="4" row="2 / span 2">
        {renderChild("Article 6")}
      </GridItem>
      <GridItem column="5" row="2 / span 2">
        {renderChild("Article 7")}
      </GridItem>
    </Grid>
  ),
}; 