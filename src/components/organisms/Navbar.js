import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useMedia from 'use-media';
import { setDarkMode, setLang } from '../../actions';
import LogoLink from '../atoms/LogoLink';
import MenuButton from '../atoms/MenuButton';
import NavList from '../molecules/NavList';
import TextToggleButton from '../atoms/TextToggleButton';
import ToggleButton from '../atoms/ToggleButton';
import { pad, mobile } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 82px;
    background-color: ${({ theme }) => theme.background.navbar};
    box-shadow: ${({ theme }) => theme.boxShadow.navbar};

    ${pad} {
        ${({ isSmallHeight, isOpen }) => !isSmallHeight && `
            height: ${isOpen ? "100vh" : "72px"};
            overflow: hidden;
        `}
    }
`;

const Placeholder = styled.div`
    width: 100%;
    height: 82px;

    ${pad} {
        ${({ isSmallHeight }) => !isSmallHeight && `
            height: 72px;
        `}
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1040px;
    padding: 0 48px;
    margin: 0 auto;

    ${pad} {
        ${({ isSmallHeight }) => !isSmallHeight && `
            flex-direction: column;
            height: 100vh;
            height: calc(var(--vh, 1vh) * 100);
            padding: 0 32px;
        `}
    }

    ${mobile} {
        padding: 0 16px;
    }
`;

const TopWrapper = styled.div`
    ${pad} {
        ${({ isSmallHeight, theme }) => !isSmallHeight && `
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 72px;

            :after {
                content: "";
                position: absolute;
                right: -8px;
                left: -8px;
                bottom: -1px;
                height: 1px;
                background-color: ${theme.text.primary};
            }
        `}
    }

    ${mobile} {
        :after {
            right: -4px;
            left: -4px;
        }
    }
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 132px;

    ${pad} {
        ${({ isSmallHeight }) => !isSmallHeight && `
            height: 80px;
        `}
    }
`;

const sectionList = Object.keys(data.en.navbar);

const Navbar = ({ isDarkMode, lang, setDarkMode, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isPad = useMedia({ maxWidth: '834px' });
    const isSmallHeight = useMedia({ maxHeight: '414px' });

    useEffect(() => {
        if (isOpen) {
            document.body.setAttribute('scroll', 'no');
            document.body.setAttribute('style', 'overflow: hidden');
        } else {
            document.body.removeAttribute('scroll');
            document.body.removeAttribute('style');
        }
    }, [isOpen])



    useEffect(() => {
        const safariHacks = () => {
            let windowsVH = window.innerHeight / 100;
            document.querySelector('.navbar-container').style.setProperty('--vh', windowsVH + 'px');
        };

        window.addEventListener('resize', safariHacks);

        safariHacks();
    }, []);

    return (
        <React.Fragment>
            <Wrapper isOpen={isOpen} isSmallHeight={isSmallHeight}>
                <Container className="navbar-container" isSmallHeight={isSmallHeight}>
                    <TopWrapper isSmallHeight={isSmallHeight}>
                        <h1><LogoLink /></h1>
                        {(isPad && !isSmallHeight) && <MenuButton
                            isOpen={isOpen}
                            handleButtonClick={() => setIsOpen(prevState => !prevState)}
                        />}
                    </TopWrapper>
                    <NavList sectionList={sectionList} setIsOpen={setIsOpen} />
                    <BottomWrapper isSmallHeight={isSmallHeight}>
                        <TextToggleButton
                            INITIAL_STATE={lang === 'en'}
                            openText="EN"
                            closeText="中"
                            handleOpenButtonClick={() => {
                                setLang('en');
                                setIsOpen(false);
                            }}
                            handleCloseButtonClick={() => {
                                setLang('tw');
                                setIsOpen(false);
                            }}
                        />
                        <ToggleButton
                            INITIAL_STATE={isDarkMode}
                            handleButtonClick={() => {
                                setDarkMode();
                                setIsOpen(false);
                            }}
                        />
                    </BottomWrapper>
                </Container>
            </Wrapper>
            <Placeholder />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
        lang: state.lang,
    };
};

export default connect(mapStateToProps, { setDarkMode, setLang })(Navbar);