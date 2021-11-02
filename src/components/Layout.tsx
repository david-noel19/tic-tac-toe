import styled from 'styled-components';

type LayoutProps = {
    gap: number,
}

const Row = styled.div<LayoutProps>`
    display: flex; 
    flex-direction: row;
    gap: ${(props) => props.gap}px;
`;

const Column = styled.div<LayoutProps>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap}px;
`;

export default ;