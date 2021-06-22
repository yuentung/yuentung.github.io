import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Section, Title } from '../templates';
import FlipImage from '../atoms/FlipImage';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80vw;
    max-height: 520px;
`;

const Skills = ({ lang }) => {
    return (
        <Section id="skills">
            <Title>{data[lang].skills.title}</Title>
            <Wrapper>
                {data.en.skills.imageList.map(({ image, text, color, position }) => (
                    <FlipImage
                        key={text}
                        image={image}
                        text={text}
                        color={color}
                        position={position}
                    />
                ))}
            </Wrapper>
        </Section>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.lang,
    };
};

export default connect(mapStateToProps)(Skills);