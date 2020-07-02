import React from 'react';
import { Heading } from './styles';

export interface ColorHeadingProps {
  text: string;
  color: string;
}

export const ColorHeading: React.FC<ColorHeadingProps> = ({ text, color }) => {
  return <Heading color={color}>{text}</Heading>;
};
