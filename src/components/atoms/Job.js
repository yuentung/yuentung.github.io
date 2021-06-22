import React from 'react';
import styled from 'styled-components';
import { pad, mobile } from '../../constants/media';

const Wrapper = styled.div`
    display: flex;

    & + & {
        margin-top: 12px;
    }

    ${pad} {
        & + & {
            margin-top: 8px;
        }
    }
`;

const Icon = styled.span`
    margin-top: 4px;
    margin-right: 12px;
    font-size: 16px;
    color: #79C186;

    ${mobile} {
        margin-top: 3.5px;
        font-size: 14px;
    }
`;

const Description = styled.p`
    letter-spacing: 0.5px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text.primary};

    ${mobile} {
        font-size: 14px;
    }
`;

const Job = ({ children }) => {
    return (
        <Wrapper>
            <Icon className="material-icons-round">check_circle</Icon>
            <Description>{children}</Description>
        </Wrapper>
    );
};

export default Job;