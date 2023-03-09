import styled from 'styled-components';
import { Typography } from "@/ui/Typography/styles/Typography";

type StyledStatisticIconContainerPropsType = {
    fillingPercent?: string
}
export const StyledStatisticIconContainer = styled.div<StyledStatisticIconContainerPropsType>(
    ({ theme, ...props }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(to top, rgb(132, 208, 108) ${ props.fillingPercent }, #ffffff ${ props.fillingPercent })`,
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: theme.colors.secondary,
        width: 44,
        height: 44,
        marginBottom: 25,
        borderRadius: '50%',
        boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        transition: '0.2s',
        transitionProperty: 'transform',
        '&:hover': {
            transform: 'scale(1.06)',
        },
        'svg': {
            '-webkit-filter': 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))',
            filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))',
        }
    }))

export const StyledStatisticIconText = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: -20,
    fontSize: `calc(${ theme.font.fontSize } - 2px)`,
    opacity: 0.6,
}))

