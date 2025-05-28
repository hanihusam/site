import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      typography: (theme: any) => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: "2 / span 10",
        };

        return {
          // DEFAULT only holds shared stuff and not the things that change
          // between light/dark
          DEFAULT: {
            css: [
              {
                "> *": {
                  gridColumn: "1 / -1",

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    gridColumn: "3 / span 8",
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                "> div": {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                a: {
                  textDecoration: "none",
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
                strong: {
                  fontWeight: theme("fontWeight.medium"),
                  fontSize: fontSize("lg"),
                },
                hr: {
                  marginTop: theme("spacing.8"),
                  marginBottom: theme("spacing.16"),
                },
                pre: {
                  color: "var(--base05)",
                  backgroundColor: "var(--base00)",
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  marginLeft: `-${theme("spacing.10vw")}`,
                  marginRight: `-${theme("spacing.10vw")}`,
                  padding: theme("spacing.8"),
                  borderRadius: 0,

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: theme("borderRadius.lg"),
                    ...breakout,
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                "h1, h2, h3, h4, h5, h6": {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme("fontWeight.normal"),

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontWeight: theme("fontWeight.medium"),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                "h1, h2": {
                  fontSize: fontSize("2xl"),
                  marginTop: theme("spacing.20"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("3xl"),
                  },
                },
                "h1:first-child, h2:first-child": {
                  marginTop: 0,
                },
                h3: {
                  fontSize: fontSize("xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("2xl"),
                  },
                },
                "h4, h5, h6": {
                  fontSize: fontSize("lg"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("xl"),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme("borderRadius.lg"),
                },
                blockquote: {
                  fontWeight: theme("fontWeight.normal"),
                  border: "none",
                  borderRadius: theme("borderRadius.lg"),
                  padding: theme("spacing.8"),
                  marginTop: 0,
                  marginBottom: theme("spacing.10"),
                },
                "blockquote p": {
                  fontSize: theme("fontSize.xl"),
                },
                "blockquote > :last-child": {
                  marginBottom: 0,
                },
              },
            ],
          },
          // use prose-light instead of default, so it's easier to see theme differences
          light: {
            css: [
              {
                color: theme("colors.body"),
                a: {
                  color: theme("colors.primary.400"),
                },
                strong: {
                  color: theme("colors.black"),
                },
                hr: {
                  borderColor: theme("colors.gray.200"),
                },
                code: {
                  color: theme("colors.gray.800"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.primary.500"),
                },
                blockquote: {
                  color: theme("colors.light"),
                  backgroundColor: theme("colors.dark"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.200"),
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: theme("colors.body-dark"),
                a: {
                  color: theme("colors.primary.400"),
                },
                strong: {
                  color: theme("colors.white"),
                },
                hr: {
                  borderColor: theme("colors.gray.600"),
                },
                code: {
                  color: theme("colors.gray.100"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.primary.500"),
                },
                blockquote: {
                  color: theme("colors.light"),
                  backgroundColor: theme("colors.black"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.600"),
                },
              },
            ],
          },
        };
      },
    },
  },
} satisfies Config;
