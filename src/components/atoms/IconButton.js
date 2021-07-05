import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${({ sideLength }) => sideLength};
    height: ${({ sideLength }) => sideLength};
    padding: 0;
    border-radius: ${({ shape }) => shape === 'square' ? '8px' : '50%'};
    text-align: center;
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ sideLength }) => sideLength};
    font-weight: 700;
    color: ${({ color }) => color};
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.background.avatarCard};
    filter: drop-shadow(${({ theme }) => theme.boxShadow.avatarCard});
    cursor: pointer;

    > svg {
        width: ${({ fontSize }) => fontSize};
        height: ${({ fontSize }) => fontSize};
    }
`;

const IconButton = ({ tag, href, target, icon, shape, sideLength, fontSize, color, backgroundColor, handleButtonClick, children }) => {
    return (
        <Button
            as={tag}
            className="material-icons-round"
            shape={shape}
            sideLength={sideLength}
            fontSize={fontSize}
            color={color}
            backgroundColor={backgroundColor}
            onClick={handleButtonClick}
            href={href}
            target={target}
        >
            {icon}
            {children}
        </Button>
    );
};

export default IconButton;