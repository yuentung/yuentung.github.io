import React from 'react';
import useMedia from 'use-media';
import styled from 'styled-components';
import { Container } from '../templates';
import Intro from '../molecules/Intro';
import AvatarCardSwiper from '../molecules/AvatarCardSwiper';
import { pad, mobile } from '../../constants/media';

const Wrapper = styled.section`
    position: relative;
`;

const InnerWrapper = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 82px);
    padding: 0 48px;

    ${pad} {
        height: calc(100vh - 72px);
        padding: 0 32px;
        ${({ isSmallHeight }) => isSmallHeight && `
            height: auto;
            padding-top: 48px;
            padding-bottom: 48px;
        `}
    }

    ${mobile} {
        height: auto;
        padding: 32px 16px;
    }
`;

const About = () => {
    const isMobile = useMedia({ maxWidth: '414px' });
    const isSmallHeight = useMedia({ maxHeight: '414px' });

    return (
        <Wrapper id="about">
            <InnerWrapper isSmallHeight={isSmallHeight}>
                {!isMobile && <Intro />}
                {isMobile && <AvatarCardSwiper />}
            </InnerWrapper>
        </Wrapper>
    );
};

export default About;