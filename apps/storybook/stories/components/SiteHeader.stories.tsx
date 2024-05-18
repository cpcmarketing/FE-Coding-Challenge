import type { StoryObj } from "@storybook/react";

import Main from "@/js/components/main";
import SiteHeader from "@/js/components/forms/login";

type Story = StoryObj<typeof SiteHeader>;

export default {
  title: "Components /  Site Header",
  component: SiteHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const Default: Story = {
  decorators: [
    (Story) => (
      <Main>
        <Story />
      </Main>
    ),
  ],
};
