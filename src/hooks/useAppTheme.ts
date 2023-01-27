import { useTheme } from "styled-components";
import { GlobalTheme } from "@/layout/theme/types";

export const useAppTheme = useTheme as () => GlobalTheme;