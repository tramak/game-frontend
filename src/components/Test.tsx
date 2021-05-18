import React from 'react';
import { useAppSelector, useActions } from '../redux/hooks';

const Test: React.FC = () => {
  const p = useAppSelector(state => state.auth.p);
  const { setAccountData } = useActions();

  return (
    <div onClick={() => setAccountData('p')}>
      test {p} 334
    </div>
  );
};

export default Test;
