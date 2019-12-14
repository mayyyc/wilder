import React, { useState } from "react";
import styled from "styled-components";
interface IProps {
  imageUrls: string[];
}
const Container = styled.div`
  position: relative;
  width: 100%;
`;
const ImageCrop = styled.div`
  width: 100%;
  height: ${window.innerWidth}px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LastOverlay = styled.div`
  height: ${window.innerWidth}px;
  width: 40%;
  position: absolute;
  left: 0;
`;
const NextOverlay = styled.div`
  height: ${window.innerWidth}px;
  width: 60%;
  position: absolute;
  right: 0;
`;
const Image = styled.img`
  display: inline-block;
  width: 100%;
  min-height: 280px;
  max-height: 400px;
  background-position: center center;
  background-size: cover;
`;
const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 4px;
  background-color: ${props => (props.active ? "#EF6D81" : "#f2f2f2")};
`;
export const ImageGallery = ({ imageUrls }: IProps) => {
  const [current, setCurrent] = useState(0);
  return (
    <Container>
      <ImageCrop>
        <LastOverlay onClick={() => current > 0 && setCurrent(current - 1)} />
        <NextOverlay
          onClick={() =>
            current < imageUrls.length - 1 && setCurrent(current + 1)
          }
        />
        {imageUrls.map(
          (url, i) =>
            i === current && (
              <Image
                key={i}
                // src={url}
                style={{
                  backgroundImage: `url(${url})`,
                  height: window.innerWidth
                }}
              />
            )
        )}
      </ImageCrop>
      <Dots>
        {imageUrls.map((url, i) => (
          <Dot key={i} active={current === i} />
        ))}
      </Dots>
    </Container>
  );
};
