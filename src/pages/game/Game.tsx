import React, { useEffect } from 'react';
import { useActions } from '../../redux/hooks';
import { useParams } from 'react-router';

const GamePage: React.FC = () => {
  const { fetchGame } = useActions();
  const { token } = useParams<{token: string}>();

  useEffect(() => {
    fetchGame(token);
  }, [ token ]);
  return null;
}

export default GamePage;

