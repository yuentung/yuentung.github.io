import React, { useState } from 'react';
import styled from 'styled-components';
import { pad } from '../../constants/media';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.span`
    position: relative;
    padding: 8px;
    font-size: 16px;
    font-weight: ${({ isSelected }) => isSelected ? 700 : 400};
    color: ${({ theme }) => theme.text.primary};
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }

    &:first-child:after {
        content: "";
        position: absolute;
        top: 8px;
        left: 30px;
        width: 1px;
        height: 16px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.text.primary};
    }

    ${pad} {
        font-size: 18px;

        &:first-child:after {
            left: 32px;
            height: 18px;
        }
    }
`;

const TextToggleButton = ({ INITIAL_STATE, openText, closeText, handleOpenButtonClick, handleCloseButtonClick }) => {
    const [isOpen, setIsOpen] = useState(INITIAL_STATE);

    return (
        <Wrapper>
            <Text
                isSelected={!isOpen}
                onClick={() => {
                    setIsOpen(false);
                    handleCloseButtonClick();
                }}
            >
                {closeText}
            </Text>
            <Text
                isSelected={isOpen}
                onClick={() => {
                    setIsOpen(true);
                    handleOpenButtonClick();
                }}
            >
                {openText}
            </Text>
        </Wrapper>
    );
};

export default TextToggleButton;