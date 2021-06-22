import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.text.primary};
`;

const TimeInText = ({ from, to }) => {
    return (
        <Wrapper>
            {`${from.getYear() + 1900}.${from.getMonth()} ～ ${to.getYear() + 1900}.${to.getMonth()}`}
        </Wrapper>
    )
};

export default TimeInText;