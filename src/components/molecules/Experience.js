import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useMedia from 'use-media';
import TimeInText from '../atoms/TimeInText';
import TimeInCalendar from '../atoms/TimeInCalendar';
import Job from '../atoms/Job';
import { pad, mobile } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: relative;
    padding: 24px;
    border-radius: 10px;
    cursor: pointer;

    :after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: calc(100% - 48px);
        height: 2px;
        background-color: ${({ theme }) => theme.background.secondary};
    }

    :hover {
        background-color: ${({ theme }) => theme.background.secondary};

        :after {
            display: none;
        }
    }

    ${pad} {
        padding: 20px;

        :after {
            width: calc(100% - 40px);
        }
    }

    ${mobile} {
        padding: 16px;
        border-radius: 0;
        background-color: ${({ theme }) => theme.background.secondary};
        box-shadow: ${({ theme }) => theme.boxShadow.primary};

        & + & {
            margin-top: 8px;
        }

        :after {
            display: none;
        }
    }
`;

const Header = styled.div`
    display: flex;

    ${mobile} {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

const Image = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 10px;
    margin-right: 24px;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};

    ${pad} {
        margin-right: 20px;
    }

    ${mobile} {
        width: 60px;
        height: 60px;
        margin-right: 0;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: auto;

    ${pad} {
        padding: 2px 0 1px;
    }

    ${mobile} {
        padding: 0;
    }
`;

const Title = styled.h5`
    font-size: 24px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text.primary};

    ${pad} {
        font-size: 20px;
    }

    ${mobile} {
        font-size: 18px;
    }
`;

const SubTitle = styled.h6`
    font-size: 18px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text.primary};

    ${pad} {
        font-size: 16px;
    }

    ${mobile} {
        font-size: 14px;
    }
`;

const Content = styled.div`
    max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
    padding-top: ${({ isOpen }) => isOpen ? '24px' : '0'};
    padding-left: 78px;
    overflow: hidden;
    transition: padding-top .2s ${({ isOpen }) => isOpen ? '' : 'ease-in-out .2s'}, max-height .4s;

    ${pad} {
        padding-top: ${({ isOpen }) => isOpen ? '20px' : '0'};
        padding-left: 74px;
    }

    ${mobile} {
        padding-top: ${({ isOpen }) => isOpen ? '16px' : '0'};
        padding-left: 0;
    }
`;

const Experience = ({ lang, type, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMedia({ maxWidth: '414px' });
    const { image, title, subTitle, jobList, from, to } = data[lang].career[type].careerList[index];

    const handleButtonClick = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    return (
        <Wrapper onClick={handleButtonClick}>
            <Header>
                <Image src={image} alt={subTitle} />
                <TitleWrapper>
                    {isMobile && <TimeInText from={from} to={to} />}
                    <SubTitle>{subTitle}</SubTitle>
                    <Title>{title}</Title>
                </TitleWrapper>
                {!isMobile && <TimeInCalendar from={from} to={to} />}
            </Header>
            {jobList.length && <Content isOpen={isOpen}>{jobList.map(job => <Job key={job}>{job}</Job>)}</Content>}
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Experience);