import { DOMAIN } from "../server/constants";
import packageJson from "../package.json";

export const version = packageJson.version;

export const getPagePath = (
  fileName: string,
  version = packageJson.version
) => {
  return `${DOMAIN}/${version}/${fileName}`;
};

// export const scriptPromise = new Promise((resolve, reject) => {
//   const script = document.createElement("script");
//   document.body.appendChild(script);
//   script.onload = resolve;
//   script.onerror = reject;
//   script.async = true;
//   script.src = "bundle.js";
// });
