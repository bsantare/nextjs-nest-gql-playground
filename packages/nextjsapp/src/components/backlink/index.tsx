import React from 'react';
import Link from 'next/link';
import { ImageContainer, StyledImage } from './styles';

export interface BackLinkProps {
  imageSrc: string;
}

export const BackLink: React.FC<BackLinkProps> = ({ imageSrc }) => {
  return (
    <ImageContainer>
      <StyledImage src={imageSrc} alt="no image for you" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </ImageContainer>
  );
};
