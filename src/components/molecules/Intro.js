import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import useMedia from 'use-media';
import styled from 'styled-components';
import ResumeLink from '../atoms/ResumeLink';
import { pc, pad } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 944px;

    ${pad} {
        flex-direction: column;
        justify-content: center;
        width: 80%;
        min-width: 400px;
    }
`;

const TextWrapper = styled.div`
    position: relative;
    width: calc(100% - 375px - 32px);
    height: calc(375px + 24px);

    ${pc} {
        width: calc(100% - 330px - 32px);
        height: calc(330px + 24px);
    }

    ${pad} {
        width: 100%;
        height: 300px;
        margin-bottom: 32px;
    }
`;

const Title = styled.h2`
    position: absolute;
    bottom: -4px;
    left: 0;
    letter-spacing: 1px;
    font-size: 84px;
    line-height: 92px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};

    ${pc} {
        font-size: 64px;
        line-height: 72px;
    }
`;

const Description = styled.p`
    position: absolute;
    top: -8px;
    right: ${({ lang }) => lang === 'en' ? '0' : '-10px'};
    text-align: right;
    letter-spacing: 0.3px;
    font-size: 18px;
    line-height: 34px;
    color: ${({ theme }) => theme.text.primary};

    ${pc} {
        font-size: 16px;
        line-height: 32px;
    }
`;

const Keyword = styled.strong`
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    color: ${({ theme, index, isSelected }) => isSelected && theme.text.keyword[index % 2]};
    cursor: pointer;
    transition: none;

    &:hover {
        color: ${({ theme, index }) => theme.text.keyword[index % 2]};
    }

    ${pc} {
        font-size: 24px;
        line-height: 40px;
    }
`;

const LinkWrapper = styled.div`
    position: absolute;
    right: 2px;
    bottom: 6px;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 375px;
    height: calc(375px + 24px);

    ${pc} {
        width: 330px;
        height: calc(330px + 24px);
    }

    ${pad} {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
    }
`;

const Text = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.text.primary};

    ${pc} {
        top: 10px;
        left: 10px;
        right: auto;
    }
`

const DotWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

const Dot = styled.span`
    display: block;
    width: ${({ isSelected }) => isSelected ? "24px" : "8px"};
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.text.primary};
    cursor: pointer;

    & + & {
        margin-left: 8px;
    }
`;

const MainImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};

    ${pad} {
        width: 49%;
        max-height: 302px;
    }
`;

const SubImageWrapper = styled.div`
    display: none;

    ${pad} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 49%;
    }
`;

const SubImage = styled.img`
    display: block;
    width: 48%;
    max-height: 145px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    cursor: pointer;

    :nth-child(1) {
        margin-bottom: 4%;
    }

    :nth-child(2) {
        margin-bottom: 4%;
    }
`;

const Line = styled.div`
    content: '';
    position: absolute;
    ${({ top }) => top && `top: ${top}`};
    ${({ right }) => right && `right: ${right}`};
    ${({ bottom }) => bottom && `bottom: ${bottom}`};
    ${({ left }) => left && `left: ${left}`};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ theme }) => theme.text.primary};
`;

const Intro = ({ isDarkMode, lang }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const isPad = useMedia({ maxWidth: '834px' });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSelectedIndex((selectedIndex + 1) % 5);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [selectedIndex]);

    const { intro, cardList, welcomeText } = data[lang].about;

    const renderSentence = useCallback((index, type) => {
        return (
            <>
                {cardList[index].sentence}
                <Keyword
                    index={index}
                    onMouseEnter={() => setSelectedIndex(index)}
                    isSelected={index === selectedIndex}
                >
                    {cardList[index].keyword}
                </Keyword>
                {(lang === 'en' && type === 'period') && '.'}
                {(lang === 'en' && type === 'comma') && ','}
                {(lang === 'tw' && type === 'period') && '。'}
                {(lang === 'tw' && type === 'comma') && '，'}
                <br />
            </>
        );
    }, [cardList, lang, selectedIndex]);

    return (
        <Wrapper>
            <TextWrapper>
                <Line top="-5px" left="1px" width="1px" height="30px" />
                <Line top="1px" left="-5px" width="40px" height="1px" />
                <Title>
                    {intro[0]}<br />
                    {intro[1]}<br />
                    {intro[2]}
                </Title>
                <Description lang={lang}>
                    {renderSentence(0, 'comma')}
                    {renderSentence(1, 'period')}
                    {renderSentence(2, 'comma')}
                    {renderSentence(3, 'comma')}
                    {renderSentence(4, 'period')}
                    {welcomeText}
                </Description>
                <LinkWrapper>
                    <ResumeLink />
                </LinkWrapper>
            </TextWrapper>
            <ImageWrapper>
                <Text>@vida_vivi_pao</Text>
                <MainImage src={cardList[selectedIndex][isDarkMode ? 'darkImage' : 'lightImage']} alt={cardList[selectedIndex].description} />
                {!isPad && <DotWrapper>
                    {cardList.map((card, index) => (
                        <Dot key={card.description} onClick={() => setSelectedIndex(index)} isSelected={index === selectedIndex} />
                    ))}
                </DotWrapper>}
                <SubImageWrapper>
                    {cardList.map((card, index) => {
                        if (selectedIndex !== index) {
                            return (
                                <SubImage
                                    key={card.description}
                                    src={cardList[index][isDarkMode ? 'darkImage' : 'lightImage']}
                                    alt={card.description}
                                    onClick={() => setSelectedIndex(index)}
                                />
                            );
                        }
                        return null;
                    })}
                </SubImageWrapper>
            </ImageWrapper>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Intro);