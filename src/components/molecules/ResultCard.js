import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import ResumeLink from '../atoms/ResumeLink';
import IconButton from '../atoms/IconButton';
import data from '../../constants/data';
import { ReactComponent as GitHubIcon } from '../../images/github.svg';

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

const LinkWrapper = styled.div`
    > a + a {
        margin-left: 16px;
    }
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
            {/* <ResumeLink /> */}
            <LinkWrapper>
                <IconButton
                    tag="a"
                    shape="square"
                    sideLength="44px"
                    fontSize="30px"
                    color="#212121"
                    backgroundColor="#E5E5E5"
                    href={data.en.about.link.github}
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    tag="a"
                    icon="email"
                    shape="square"
                    sideLength="44px"
                    fontSize="30px"
                    color="#45A4F5"
                    backgroundColor="#CCE7FF"
                    href={data.en.about.link.email}
                    target="_blank"
                />
                <IconButton
                    tag="a"
                    icon="picture_as_pdf"
                    shape="square"
                    sideLength="44px"
                    fontSize="30px"
                    color="#E53F33"
                    backgroundColor="#F5C2BC"
                    href={data.en.about.link.cv}
                    target="_blank"
                />
            </LinkWrapper>
        </ResultWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(ResultCard);