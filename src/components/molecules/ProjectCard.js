import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Calendar from '../atoms/Calendar';
import { largeMobile, pad, mobile } from '../../constants/media';
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
        left: 51%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 60px;
        background-color: #FFFFFF;
        opacity: 0.5;
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
`;

const LinkIcon = styled.span`
    font-size: 54px;
`;

const LinkText = styled.span`
    font-size: 24px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    ${mobile} {
        padding-right: 16px;
        padding-left: 16px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 54px;
    border-left: 5px solid ${({ theme, index }) => theme.text.keyword[index % 2]};
    padding-left: 16px;
`;

const Title = styled.h4`
    margin-bottom: 8px;
    letter-spacing: 0.5px;
    font-size: 24px;
    color: ${({ theme }) => theme.text.primary};

    ${pad} {
        font-size: 20px;
    }

    ${mobile} {
        font-size: 18px;
    }
`;

const SubTitle = styled.h6`
    letter-spacing: 0.5px;
    font-size: 16px;
    color: ${({ theme }) => theme.text.primary};
`;

const ProjectCard = ({ isDarkMode, lang, index }) => {
    const { darkImage, lightImage, title, subTitle, date, pageLink, codeLink } = data[lang].projects.projectList[index];

    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={isDarkMode ? darkImage : lightImage} alt={title} />
                <DetailWrapper>
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
                </DetailWrapper>
            </ImageWrapper>
            <Header>
                <TitleWrapper index={index}>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleWrapper>
                <Calendar date={date} />
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