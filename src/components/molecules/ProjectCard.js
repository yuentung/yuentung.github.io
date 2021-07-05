import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useMedia from 'use-media';
import TimeInText from '../atoms/TimeInText';
import Calendar from '../atoms/Calendar';
import { pad, largeMobile } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.div`
    width: 49%;

    & + & {
        margin-top: 1.5vw;
    }

    :nth-child(2) {
        margin-top: 0;
    }

    ${largeMobile} {
        width: 100%;

        & + & {
            margin-top: 0;
        }
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};

    &:hover > div {
        display: flex;
    }

`;

const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const DetailWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`;

const LinkWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    &:after {
        content: '';
        position: absolute;
        top: 52%;
        left: calc(50% + 2px);
        transform: translate(-50%, -50%);
        width: 2px;
        height: 60px;
        border-radius: 1px;
        background-color: #FFFFFF;
        opacity: 0.5;
    }

    ${pad} {
        width: auto;
        height: auto;

        &:after {
            top: 50%;
            height: 55%;
            background-color: ${({ theme }) => theme.text.tertiary};
            opacity: 0.8;
        }
    }
`;

const Link = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    ${pad} {
        color: ${({ theme }) => theme.text.tertiary};
        opacity: 1;

        & + & {
            margin-left: 32px;
        }
    }
`;

const LinkIcon = styled.span`
    font-size: 54px;

    ${pad} {
        font-size: 28px;
    }
`;

const LinkText = styled.span`
    font-size: 24px;

    ${pad} {
        padding-bottom: 5px;
        font-size: 12px;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;

    ${largeMobile} {
        padding-right: 16px;
        padding-left: 16px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 54px;
    margin-right: auto;
    border-left: 5px solid ${({ theme, index }) => theme.text.keyword[index % 2]};
    padding-left: 12px;

    ${pad} {
        height: 54px;
        justify-content: space-between;
    }
`;

const Title = styled.h5`
    font-size: 24px;
    letter-spacing: 0.5px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.secondary};

    ${pad} {
        font-size: 18px;
    }
`;

const SubTitle = styled.h6`
    font-size: 18px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text.secondary};

    ${pad} {
        font-size: 13px;
    }
`;

const ProjectCard = ({ isDarkMode, lang, index }) => {
    const { darkImage, lightImage, title, subTitle, from, to, pageLink, codeLink } = data[lang].projects.projectList[index];
    const isPad = useMedia({ maxWidth: '834px' });

    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={isDarkMode ? darkImage : lightImage} alt={title} />
                {!isPad && <DetailWrapper>
                    <LinkWrapper>
                        <Link href={codeLink} target="_blank">
                            <LinkIcon className="material-icons-round">code</LinkIcon>
                            <LinkText>Code</LinkText>
                        </Link>
                        <Link href={pageLink} target="_blank">
                            <LinkIcon className="material-icons-round">link</LinkIcon>
                            <LinkText>Page</LinkText>
                        </Link>
                    </LinkWrapper>
                </DetailWrapper>}
            </ImageWrapper>
            <Header>
                <TitleWrapper index={index}>
                    {isPad && <TimeInText from={from} to={to} />}
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleWrapper>
                {!isPad && <Calendar date={to} />}
                {isPad && <LinkWrapper>
                    <Link href={codeLink} target="_blank">
                        <LinkIcon className="material-icons-round">code</LinkIcon>
                        <LinkText>Code</LinkText>
                    </Link>
                    <Link href={pageLink} target="_blank">
                        <LinkIcon className="material-icons-round">link</LinkIcon>
                        <LinkText>Page</LinkText>
                    </Link>
                </LinkWrapper>}
            </Header>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(ProjectCard);