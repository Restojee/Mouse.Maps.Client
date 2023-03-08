import styled from "styled-components";

export const StyledPagePanelButton = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: '5px 8px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    'svg': {
        width: 28,
        height: 28,
    }
})

