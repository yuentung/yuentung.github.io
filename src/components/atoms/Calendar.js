import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 54px;
    height: 54px;
`;

const TopWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 54px;
    height: 20px;
    border-radius: 10px 10px 0 0;
    text-align: center;
    font-size: 13px;
    line-height: 21px;
    color: ${({ theme }) => theme.background.primary};
    background-color: ${({ theme }) => theme.text.tertiary};
`;

const BottomWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    width: 54px;
    height: 34px;
    border: 1px solid ${({ theme }) => theme.text.tertiary};
    border-radius: 0 0 10px 10px;
    text-align: center;
    font-size: 15px;
    line-height: 32px;
    color: ${({ theme }) => theme.text.tertiary};
`;

const index2Text = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    tw: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

const Calendar = ({ lang, date }) => {
    return (
        <Wrapper>
            <TopWrapper>{date.getYear() + 1900}</TopWrapper>
            <BottomWrapper>{index2Text[lang][date.getMonth() - 1]}</BottomWrapper>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Calendar);