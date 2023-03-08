import styled from 'styled-components';

export const StyledImageFormContainer = styled.div(({ theme }) => ({
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: '35px 15px',
    textAlign: 'center',
    outline: '2px dashed rgba(0, 0, 0, 0.1)',
    fontSize: `calc(${ theme.font.fontSize } - 2px)`,
}))

export const StyledImageFormLink = styled.span(({ theme }) => ({
    color: theme.colors.brandColor,
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover': {
        opacity: 0.5,
    }
}))
