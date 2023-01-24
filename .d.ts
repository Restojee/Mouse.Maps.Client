import { DefaultTheme } from "@/layout/theme/DefaultTheme";

type Theme = typeof DefaultTheme;

declare module "styled-components" {

    export interface DefaultTheme extends Theme {}
}