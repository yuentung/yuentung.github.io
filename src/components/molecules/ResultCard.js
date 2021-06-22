import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ResumeLink from '../atoms/ResumeLink';
import data from '../../constants/data';

const ResultWrapper = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: calc(100% + 2px);
    background-color: ${({ theme }) => theme.background.primary};
`;

const Title = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.text.primary};
`;

const Percentage = styled.span`
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};
`;

const Description = styled.p`
    width: 270px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.text.primary};
`;

const ResultCard = ({ lang, score }) => {
    const { result } = data[lang].about;
    let description;
    if (score <= 20) description = result.description[0];
    else if (score <= 60) description = result.description[1];
    else description = result.description[2];

    return (
        <ResultWrapper>
            <Title>{result.title}</Title>
            <Percentage>{description.icon} {score}%</Percentage>
            <Description>{description.text}</Description>
            <ResumeLink />
        </ResultWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(ResultCard);