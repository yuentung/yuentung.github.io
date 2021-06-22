import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from './globalStyle';
import { Container } from './templates';
import Navbar from './organisms/Navbar';
import About from './organisms/About';
import Career from './organisms/Career';
import Skills from './organisms/Skills';
import Projects from './organisms/Projects';
import Footer from './organisms/Footer';
import color from '../constants/color';

const App = ({ isDarkMode }) => {
    const theme = { ...color[isDarkMode ? 'dark' : 'light'] };

    return (
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <GlobalStyle />
            <Navbar />
            <About />
            <Container>
                <Career />
                <Skills />
                <Projects />
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode,
    };
};

export default connect(mapStateToProps)(App);