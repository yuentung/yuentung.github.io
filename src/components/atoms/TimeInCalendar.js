import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Calendar from './Calendar';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.span`
    margin: 0 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.text.tertiary};
`;

const TimeInCalendar = ({ lang, from, to }) => {
    return (
        <Wrapper>
            <Calendar date={from} />
            <Text>{lang === 'en' ? 'to' : '至'}</Text>
            <Calendar date={to} />
        </Wrapper>
    )
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(TimeInCalendar);