/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';

function View(props) {
  const [styleImages, setStyleImages] = useState(props.selectedStylePhotos);

  useEffect(() => {
    if (props.selectedStylePhotos) {
      setStyleImages(props.selectedStylePhotos);
    }
  }, [props.selectedStylePhotos]);

  if (styleImages) {
    return <Slideshow images={styleImages} />;
  }
}

const ImageBox = styled.div`
  position: relative;
  background: rgb(245, 235, 214);
  width: 100%;
  height: 75%;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 30%;
  font-size: 20px;


  ${({ position }) => position === 'left'
    && css`
      left: 10px;
    `}

  ${({ position }) => position === 'right'
    && css`
      right: 10px;
    `}
`;

function Slideshow(props) {
  const [{ photos, activeIndex }, setState] = useState({
    photos: props.images,
    activeIndex: 0, // begin with the first item
  });

  useEffect(() => {
    setState({
      photos: props.images,
      activeIndex: 0,
    });
  }, [props.images]);

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({ ...s, activeIndex: photos.length - 1 }));
      return;
    }
    if (newIndex === photos.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    return (
      <div id="image-modal">
        <div onClick={toggleModal} className="overlay" />
        <div id="image-modal-content">
          <button className="image-close-modal" onClick={toggleModal} type="submit">
            CLOSE
          </button>
          <SlideWrapper>
              <img alt="" src={photos[activeIndex].url} id="modalImage" />
              <NavButton position="left" onClick={moveTo(activeIndex - 1)}>{'<'}</NavButton>
              <NavButton position="right" onClick={moveTo(activeIndex + 1)}>{'>'}</NavButton>
          </SlideWrapper>
        </div>
      </div>
    );
  }

  return (
    <SlideWrapper>
      <ImageBox>
        <img alt="" src={photos[activeIndex].url} id="current-image" onClick={toggleModal} />
        <NavButton position="left" onClick={moveTo(activeIndex - 1)}>{'<'}</NavButton>
        <NavButton position="right" onClick={moveTo(activeIndex + 1)}>{'>'}</NavButton>
      </ImageBox>
      <ThumbnailList>
        {photos.map((item, index) => (
          <Thumbnail
            active={activeIndex === index}
            src={item.thumbnail_url}
            onClick={moveTo(index)}
          />
        ))}
      </ThumbnailList>
    </SlideWrapper>
  );
}

const ThumbnailList = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 15%;
`;

const Thumbnail = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  flex-grow: 1;

  :hover {
    opacity: 1;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 900px;
  margin-left: 50px;
  margin-right: 20px;
`;

export default View;
