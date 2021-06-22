import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import data from '../../constants/data';

const Wrapper = styled(TinderCard)`
    position: absolute;
    z-index: ${({ index }) => 50 - index};
    filter: drop-shadow(${({ theme }) => theme.boxShadow.avatarCard});
`;

const Text = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.text.primary};
`

const Image = styled.img`
    display: block;
    width: 100%;
    border-radius: 8px 8px 0 0;
`;

const IntroWrapper = styled.div`
    padding: 16px 0 20px;
    border-radius: 0 0 8px 8px;
    background-color: ${({ theme }) => theme.background.avatarCard};
`;

const Title = styled.h2`
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};
`;

const SubTitle = styled.p`
    margin-bottom: 8px;
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.text.secondary};
`;

const Description = styled.p`
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.text.secondary};
`;

const AvatarCard = ({ isDarkMode, lang, reference, index, onSwipe, onCardLeftScreen }) => {
    const { darkImage, lightImage, title, subTitle, description } = data[lang].about.cardList[index];

    return (
        <Wrapper
            ref={reference}
            onSwipe={onSwipe}
            onCardLeftScreen={onCardLeftScreen}
            preventSwipe={['up', 'down']}
            index={index}
        >
            <Text>@vida_vivi_pao</Text>
            <Image src={isDarkMode ? darkImage : lightImage} alt={description} />
            <IntroWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <Description>{description}</Description>
            </IntroWrapper>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(AvatarCard);