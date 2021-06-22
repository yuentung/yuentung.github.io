import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import data from '../../constants/data';

const Wrapper = styled.a`
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.text.primary};
    box-shadow: ${({ isDarkMode }) => isDarkMode ? '0 1px 2px rgba(0, 0, 0, 0.25)' : '0 1px 2px rgba(0, 0, 0, 0.8)'};
    overflow: hidden;
    cursor: pointer;

    span {
        font-size: 16px;
        line-height: 1.5;
        color: ${({ theme }) => theme.background.primary};

        &:nth-child(1) {
            padding: 4px 12px;
            background-color: ${({ theme }) => theme.text.secondary};
        }

        &:nth-child(2) {
            padding: 4px 8px;
            background-color: ${({ theme }) => theme.text.primary};
        }
    }

    &:hover {
        span:nth-child(2) {
                animation: Move .8s;
            }
        }
    }

    @keyframes Move {
        0% {
            transform: translateY(0%);
        }

        50% {
            transform: translateY(75%);
        }

        51% {
            transform: translateY(-75%);
        }

        100% {
            transform: translateY(0%);
        }
    }
`;

const ResumeLink = ({ isDarkMode, lang }) => {
    return (
        <Wrapper
            href={data.en.about.resumeLink}
            target="_blank"
            isDarkMode={isDarkMode}
        >
            <span>{lang === 'en' ? 'Resume' : '履歷'}</span>
            <span className="material-icons-round">arrow_downward</span>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(ResumeLink);