// @ts-expect-error - Ignoring the error of missing types for the uno config
import config from "@slidev/client/uno.config";
import {
  mergeConfigs,
  presetAttributify,
  presetWebFonts,
  presetWind3,
} from "unocss";

const fontTokens = {
  sans: "Inter",
  mono: "Chivo Mono",
};

const themeColors = {
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
  card: "var(--color-card)",
  "card-foreground": "var(--color-card-foreground)",
  "card-soft": "var(--color-card-soft)",
  popover: "var(--color-popover)",
  "popover-foreground": "var(--color-popover-foreground)",
  primary: "var(--color-primary)",
  "primary-foreground": "var(--color-primary-foreground)",
  secondary: "var(--color-secondary)",
  "secondary-foreground": "var(--color-secondary-foreground)",
  muted: "var(--color-muted)",
  "muted-foreground": "var(--color-muted-foreground)",
  "muted-soft": "var(--color-muted-soft)",
  accent: "var(--color-accent)",
  "accent-foreground": "var(--color-accent-foreground)",
  destructive: "var(--color-destructive)",
  "destructive-foreground": "var(--color-destructive-foreground)",
  border: "var(--color-border)",
  input: "var(--color-input)",
  ring: "var(--color-ring)",
  "chart-1": "var(--color-chart-1)",
  "chart-2": "var(--color-chart-2)",
  "chart-3": "var(--color-chart-3)",
  "chart-4": "var(--color-chart-4)",
  "chart-5": "var(--color-chart-5)",
  "chart-1-20": "var(--color-chart-1-20)",
  "chart-1-40": "var(--color-chart-1-40)",
  "chart-1-60": "var(--color-chart-1-60)",
  "chart-2-20": "var(--color-chart-2-20)",
  "chart-2-40": "var(--color-chart-2-40)",
  "chart-2-60": "var(--color-chart-2-60)",
  "chart-4-20": "var(--color-chart-4-20)",
  "chart-4-40": "var(--color-chart-4-40)",
  "chart-4-60": "var(--color-chart-4-60)",
  "destructive-20": "var(--color-destructive-20)",
  "destructive-40": "var(--color-destructive-40)",
  "destructive-60": "var(--color-destructive-60)",
};

export default mergeConfigs([
  config,
  {
    rules: [
      [
        "font-math",
        {
          "font-family":
            'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        },
      ],
    ],
    safelist: [
      ...Array.from({ length: 30 }, (_, i) => `delay-${(i + 1) * 100}`),
      "animate-pulse",
    ],
    theme: {
      colors: themeColors,
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        DEFAULT: "var(--shadow-sm)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inset-sm)",
      },
    },
    presets: [
      presetWind3({
        dark: "class",
      }),
      presetAttributify(),
      presetWebFonts({
        fonts: {
          sans: fontTokens.sans,
          mono: fontTokens.mono,
        },
      }),
    ],
  },
]);
