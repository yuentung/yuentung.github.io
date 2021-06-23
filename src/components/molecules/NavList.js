import React, { useState, useEffect, useMemo } from 'react';
import useMedia from 'use-media';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NavItem from '../atoms/NavItem';
import { pad } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.ul`
    display: flex;

    ${pad} {
        ${({ isSmallHeight }) => !isSmallHeight && `
            flex-direction: column;
            align-items:center;
            width: 100%;
        `}
    }
`;

const NavList = ({ lang, sectionList, setIsOpen }) => {
    const isPad = useMedia({ maxWidth: '834px' });
    const isSmallHeight = useMedia({ maxHeight: '414px' });
    const navbarHeight = useMemo(() => isPad ? 72 : 82, [isPad]);
    const [selectedSection, setSelectedSection] = useState(document.elementFromPoint(window.innerWidth / 2, navbarHeight).id || sectionList[0]);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const elementList = document.elementsFromPoint(window.innerWidth / 2, navbarHeight);
            const sectionElement = elementList.find(element => element.tagName === 'SECTION');
            const currentSection = sectionElement ? sectionElement.id : 'about';
            if (currentSection) {
                setSelectedSection(currentSection);
            }
        });
    }, [navbarHeight]);

    return (
        <Wrapper onClick={() => setIsOpen(false)} isSmallHeight={isSmallHeight}>
            {sectionList.map(section => (
                <NavItem
                    key={section}
                    id={section}
                    isSelected={section === selectedSection}
                    setSelectedSection={setSelectedSection}
                >
                    {data[lang].navbar[section]}
                </NavItem>
            ))}
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(NavList);