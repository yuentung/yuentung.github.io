import React, { useState } from 'react';
import styled from 'styled-components';
import { pad, mobile } from '../../constants/media';

const Wrapper = styled.div`
    position: absolute;
    top: ${({ position }) => position.top}%;
    left: ${({ position }) => position.left}%;
    width: 125px;
    height: 125px;
    cursor: pointer;

    ${pad} {
        width: 15vw;
        height: 15vw;
        max-width: 100px;
        max-height: 100px;
    }
`;

const InnerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: ${({ isOpen }) => isOpen && 'rotateY(180deg)'};
    transform-style: preserve-3d;
    perspective: 1000px;
`;

const FrontWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    filter: drop-shadow(${({ theme }) => theme.boxShadow.primary});
`;

const BackWrapper = styled(FrontWrapper)`
    transform: rotateY(180deg);
`;

const Name = styled.p`
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: ${({ color }) => color};

    ${pad} {
        font-size: 24px;
    }

    ${mobile} {
        font-size: 16px;
    }
`;

const FlipImage = ({ position, image, color, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper
            position={position}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <InnerWrapper isOpen={isOpen}>
                <FrontWrapper>{image}</FrontWrapper>
                <BackWrapper>
                    <Name color={color}>{text}</Name>
                </BackWrapper>
            </InnerWrapper>
        </Wrapper>
    );
};

export default FlipImage;