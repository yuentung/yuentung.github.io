import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${({ sideLength }) => sideLength};
    height: ${({ sideLength }) => sideLength};
    padding: 0;
    border-radius: 50%;
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ sideLength }) => sideLength};
    color: ${({ color }) => color};
    background-color: ${({ theme }) => theme.background.avatarCard};
    filter: drop-shadow(${({ theme }) => theme.boxShadow.avatarCard});
`;

const IconButton = ({ icon, sideLength, fontSize, color, handleButtonClick }) => {
    return (
        <Button
            className="material-icons-round"
            sideLength={sideLength}
            fontSize={fontSize}
            color={color}
            onClick={handleButtonClick}
        >
            {icon}
        </Button>
    );
};

export default IconButton;