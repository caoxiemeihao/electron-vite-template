import { Configuration } from "electron-builder";

/**
 * @see https://www.electron.build/configuration
 */
const config: Configuration = {
  appId: "YourAppID",
  asar: true,
  directories: {
    output: "release/${version}",
  },
  files: ["dist-electron", "dist"],
  mac: {
    artifactName: "${productName}_${version}.${ext}",
    target: ["dmg", "zip"],
  },
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}_${version}.${ext}",
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  publish: {
    provider: "generic",
    channel: "latest",
    url: "https://github.com/electron-vite/electron-vite-react/releases/download/v0.9.9/",
  },
};

export default config;
