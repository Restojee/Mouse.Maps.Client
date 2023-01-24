import React, { Fragment } from "react";
import { ThemeProvider as StyledThemeProvider} from "styled-components";
import {DefaultTheme} from "@/layout/theme/DefaultTheme";
import {GlobalThemeStyles} from "@/layout/theme/GlobalThemeStyles";

type TThemes = {
    [key in ThemeKey]: GlobalTheme
}

type GlobalTheme = typeof DefaultTheme;

enum ThemeKey {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

enum MediaKey {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
}

const GlobalThemes: TThemes = {
    [ThemeKey.DARK]: DefaultTheme,
    [ThemeKey.LIGHT]: DefaultTheme
}

type Props = {
    themeKey: ThemeKey
    children: React.ReactNode;
}

export const ThemeProvider = (props: Partial<Props>) => {
    const { themeKey = ThemeKey.LIGHT, children } = props;
    const theme = GlobalThemes[themeKey]
    return (
        <StyledThemeProvider theme={ theme }>
            <GlobalThemeStyles { ...theme } />
            <Fragment>
                { children }
            </Fragment>
        </StyledThemeProvider>
    )
}