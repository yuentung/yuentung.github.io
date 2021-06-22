import React, { useState, useRef, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import AvatarCard from './AvatarCard';
import ResultCard from './ResultCard';
import IconButton from '../atoms/IconButton';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const AvatarCardWrapper = styled.div`
    height: calc(100vw - 32px + 106px);
    margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 16px;
`;

const { cardList } = data.en.about;

const AvatarCardSwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const score = useRef(0);

    const imageCardRefList = useMemo(() => (
        Array(cardList.length).fill(0).map(i => React.createRef())
    ), []);

    const renderImageCard = useCallback(() => {
        return cardList.map(({ description }, index) => (
            <AvatarCard
                key={description}
                index={index}
                reference={imageCardRefList[index]}
                onSwipe={dir => {
                    if (dir === 'right') score.current += 20;
                    setCurrentIndex(prevState => prevState + 1);
                }}
                onCardLeftScreen={dir => {
                    // setIsLoading(true);
                    // if (dir === 'right') score.current += 20;
                    // setCurrentIndex(prevState => prevState + 1);
                    // setIsLoading(false);
                }}
            />
        ));
    }, [imageCardRefList]);

    const handleButtonClick = (dir, bonus) => {
        if (currentIndex === cardList.length) return;
        imageCardRefList[currentIndex].current.swipe(dir);
        if (bonus === 20 || bonus === -20) {
            score.current += bonus;
        }
    };

    return (
        <Wrapper>
            {currentIndex >= cardList.length && <ResultCard score={score.current} />}
            <AvatarCardWrapper>{renderImageCard()}</AvatarCardWrapper>
            <ButtonWrapper>
                <IconButton
                    icon="delete"
                    sideLength="48px"
                    fontSize="28px"
                    color="#757575"
                    handleButtonClick={() => handleButtonClick('left', -20)}
                />
                <IconButton
                    icon="close"
                    sideLength="60px"
                    fontSize="36px"
                    color="#438EF2"
                    handleButtonClick={() => handleButtonClick('left', 0)}
                />
                <IconButton
                    icon="favorite"
                    sideLength="60px"
                    fontSize="36px"
                    color="#ED5958"
                    handleButtonClick={() => handleButtonClick('right', 0)}
                />
                <IconButton
                    icon="star"
                    sideLength="48px"
                    fontSize="28px"
                    color="#F8B917"
                    handleButtonClick={() => handleButtonClick('right', 20)}
                />
            </ButtonWrapper>
        </Wrapper>
    );
};

export default AvatarCardSwiper;