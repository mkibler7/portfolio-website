import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: { colors: { ...colors } } },
  plugins: [],
};

export default withMT(config);
