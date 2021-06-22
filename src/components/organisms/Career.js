import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Section, Title, SubSection, SubTitle } from '../templates';
import Experience from '../molecules/Experience';
import { pad, mobile } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled(Section)`
    padding-right: 24px;
    padding-left: 24px;

    ${pad} {
        padding-right: 12px;
        padding-left: 12px;
    }

    ${mobile} {
        padding-right: 0;
        padding-left: 0;
    }
`;

const educationList = data.en.career.education.careerList;

const workExperienceList = data.en.career.workExperience.careerList;

const Career = ({ lang }) => {
    return (
        <Wrapper id="career">
            <Title>{data[lang].career.title}</Title>
            <SubSection>
                <SubTitle>{data[lang].career.education.title}</SubTitle>
                {educationList.map((experience, index) => (
                    <Experience key={experience.title} type="education" index={index} />
                ))}
            </SubSection>
            <SubSection>
                <SubTitle>{data[lang].career.workExperience.title}</SubTitle>
                {workExperienceList.map((experience, index) => (
                    <Experience key={experience.title} type="workExperience" index={index} />
                ))}
            </SubSection>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Career);