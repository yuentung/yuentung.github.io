import React, { useCallback } from 'react';
import useMedia from 'use-media';
import styled from 'styled-components';
import { pad } from '../../constants/media';

const Wrapper = styled.li`
    cursor: pointer;

    ${pad} {
        width: 100%;
    }
`;

const Link = styled.a`
    position: relative;
    display: block;
    padding: 33px 16px;
    text-align: center;
    font-size: 16px;
    font-weight: ${({ isSelected }) => isSelected ? "700" : "400"};
    color: ${({ theme }) => theme.text.primary};

    &:after {
        content: "";
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        width: ${({ isSelected }) => isSelected ? "20px" : "0px"};
        height: 2px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.text.primary};
    }

    &:hover {
        font-weight: 700;

        &:after {
            width: 20px;
        }
    }

    ${pad} {
        font-size: 18px;

        &:after {
            bottom: 20px;
        }
    }
`;

const NavItem = ({ id, isSelected, setSelectedSection, children }) => {
    const isPad = useMedia({ maxWidth: '834px' });

    const handleButtonClick = useCallback(() => {
        setSelectedSection(id);
        const navbarHeight = isPad ? 72 : 82;
        const distanceToNavbar = document.querySelector(`#${id}`).getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo(0, distanceToNavbar);
    }, [id, setSelectedSection, isPad]);

    return (
        <Wrapper>
            <Link onClick={handleButtonClick} isSelected={isSelected}>{children}</Link>
        </Wrapper>
    );
};

export default NavItem;