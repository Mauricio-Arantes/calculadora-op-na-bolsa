import * as S from './styles';
import React from 'react';

const Main: React.FC = ({ children }) => (
  <S.Container>{children || 'Storybook'}</S.Container>
);

export default Main;
