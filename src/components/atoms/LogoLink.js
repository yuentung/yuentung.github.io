import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: block;
    padding: 5px;
    border: 3px solid ${({ theme }) => theme.text.primary};
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};

    :hover {
        color: ${({ theme }) => theme.background.primary};
        background-color: ${({ theme }) => theme.text.primary};
    }
`;

const LogoLink = () => {
    return <Link href="">YUEN</Link>;
};

export default LogoLink;