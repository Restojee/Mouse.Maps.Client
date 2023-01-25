import React, { Fragment } from "react";
import { ThemeProvider as StyledThemeProvider} from "styled-components";
import { GlobalThemeStyles } from "@/layout/theme/GlobalThemeStyles";
import { GlobalThemes } from "@/layout/theme/constants";
import { ThemeKey } from "@/layout/theme/types";

enum MediaKey {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
}


type Props = {
    themeKey: ThemeKey;
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