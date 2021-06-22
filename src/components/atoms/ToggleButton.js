import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 40px;
    height: 24px;
    padding: 4px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.text.primary};
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const Inner = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    margin-left: ${({ isOpen }) => isOpen ? "16px" : "1px"};
    background-color: ${({ theme }) => theme.background.navbar};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`;

const ToggleButton = ({ INITIAL_STATE, handleButtonClick }) => {
    const [isOpen, setIsOpen] = useState(INITIAL_STATE);

    return (
        <Wrapper
            isOpen={isOpen}
            onClick={() => {
                setIsOpen(prevState => !prevState);
                handleButtonClick();
            }}
        >
            <Inner isOpen={isOpen} />
        </Wrapper>
    );
};

export default ToggleButton;