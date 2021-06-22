import styled from 'styled-components';
import { pad, mobile } from '../../constants/media';

export const Container = styled.div`
    position: relative;
    max-width: 1040px;
    margin: 0 auto;
`;

export const Section = styled.section`
    padding: 48px;

    ${pad} {
        padding: 32px;
    }
    ${mobile} {
        padding: 16px 0;
    }
`;

export const SubSection = styled.div`
    & + & {
        margin-top: 48px;
    }

    ${pad} {
        & + & {
            margin-top: 32px;
        }
    }

    ${mobile} {
        & + & {
            margin-top: 16px;
        }
    }
`;

export const Title = styled.h3`
    margin-bottom: 48px;
    text-align: center;
    letter-spacing: 1px;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};

    ${pad} {
        margin-bottom: 32px;
        font-size: 32px;
    }

    ${mobile} {
        margin-bottom: 24px;
        font-size: 28px;
    }
`;

export const SubTitle = styled.h4`
    display: table;
    padding-bottom: 4px;
    border-bottom: 2px solid ${({ theme }) => theme.text.primary};
    margin: 0 auto 48px;
    letter-spacing: 1px;
    font-size: 28px;
    color: ${({ theme }) => theme.text.primary};

    ${pad} {
        margin: 0 auto 32px;
        font-size: 24px;
    }

    ${mobile} {
        border-bottom-width: 1px;
        margin: 0 auto 16px;
        font-size: 20px;
    }
`;