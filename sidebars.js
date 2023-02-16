/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Welcome",
    },
    {
      type: "doc",
      id: "architecture",
      label: "Architecture Overview",
    },
    {
      type: "category",
      label: "Bridging Model",
      collapsible: true,
      collapsed: false,
      items: [
        "bridge/overview",
        "bridge/how-bridge-is-secured",
        "bridge/sisu-mpc-bridge",
        "bridge/token-swap",
        "bridge/cross-chain-contract-interaction",
      ],
    },
    {
      type: "category",
      label: "Privacy and ZKP",
      collapsible: true,
      collapsed: false,
      items: ["privacy/introduction", "privacy/zkp-snark", "privacy/sisu-privacy"],
    },
    {
      type: "category",
      label: "Developers",
      collapsible: true,
      collapsed: false,
      items: ["developers/getting-started", "developers/get-test-tokens"],
    },
    {
      type: "category",
      label: "References",
      collapsible: true,
      collapsed: false,
      items: ["references/contracts"],
    },
    {
      type: "category",
      label: "More",
      collapsible: true,
      collapsed: false,
      items: ["more/roadmap", "more/tutorial"],
    },
  ],
};

module.exports = sidebars;
