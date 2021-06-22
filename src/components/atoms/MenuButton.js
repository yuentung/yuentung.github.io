import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 28px;
    height: 40px;
    cursor: pointer;
`;

const Line = styled.div`
    position: absolute;
    width: 28px;
    height: 3px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.text.primary};
    transition: top .2s ${({ isOpen }) => isOpen ? '0s' : '.3s'}, transform .3s ${({ isOpen }) => isOpen ? '.2s' : '0s'};
`;

const TopLine = styled(Line)`
    top: ${({ isOpen }) => isOpen ? '18px' : '12px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const BottomLine = styled(Line)`
    top: ${({ isOpen }) => isOpen ? '18px' : '24px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
`;

const MenuButton = ({ isOpen, handleButtonClick }) => {
    return (
        <Wrapper onClick={() => handleButtonClick()}>
            <TopLine isOpen={isOpen} />
            <BottomLine isOpen={isOpen} />
        </Wrapper>
    );
};

export default MenuButton;