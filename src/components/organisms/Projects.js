import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Section, Title } from '../templates';
import ProjectCard from '../molecules/ProjectCard';
import { mobile } from '../../constants/media';
import data from '../../constants/data';

const Wrapper = styled(Section)`
    ${mobile} {
        padding-bottom: 0;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const { projectList } = data.en.projects;

const Projects = ({ lang }) => {
    return (
        <Wrapper id="projects">
            <Title>{data[lang].projects.title}</Title>
            <InnerWrapper>
                {projectList.map((project, index) => <ProjectCard key={project.title} index={index} />)}
            </InnerWrapper>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Projects);