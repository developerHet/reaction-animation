import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import ParticleContainer from "./ParticleContainer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ReactComponentLibrary/Particle",
  component: ParticleContainer,
  args:{
    height: "350px",
    width: "80%"
  }
} satisfies Meta<typeof ParticleContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParticleContainerStory: Story = {};
