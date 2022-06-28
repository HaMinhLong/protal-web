// THIRD-PARTY
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// PROJECT IMPORT
import Palette from "./palette";
import Typography from "./typography";
import useConfig from "hooks/useConfig";

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const { borderRadius, fontFamily, navType, presetColor, rtlLayout } =
    useConfig();

  const theme: Theme = useMemo<Theme>(
    () => Palette(navType, presetColor),
    [navType, presetColor]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? "rtl" : "ltr",
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: "48px",
          padding: "16px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
      typography: themeTypography,
    }),
    [rtlLayout, theme, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
