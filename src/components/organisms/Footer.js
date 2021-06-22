import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { pad } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.section`
    padding: 24px 12px;
    background-color: ${({ theme }) => theme.background.secondary};
`;

const Text = styled.p`
    margin-bottom: 16px;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.text.tertiary};

    ${pad} {
        font-size: 13px;
    }
`;

const DotWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Dot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text.tertiary};

    & + & {
        margin-left: 6px;
    }
`;

const Footer = ({ lang }) => {
    return (
        <Wrapper id="footer">
            <Text>{data[lang].footer.copyright}</Text>
            <DotWrapper>
                <Dot />
                <Dot />
                <Dot />
            </DotWrapper>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Footer);