import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs/react";

// automatically import all files ending in *.stories.js

setOptions({
  name: "Myworks",
  url: "https://github.com/mismith0227",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

addDecorator(withKnobs);

function loadStories() {
  const req = require.context("../src/components/", true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
