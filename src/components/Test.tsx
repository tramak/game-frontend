import React from 'react';
import { RootState } from '../redux/store';
import * as actions from '../redux/actions';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: RootState) => ({
  p: state.auth.p
});

const mapDispatch = {
  setAccountData: actions.setAccountData
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Test: React.FC<PropsFromRedux> = ({ p, setAccountData }) => {
  return (
    <div onClick={() => setAccountData('p')}>
      test {p} 3
    </div>
  );
};

export default connector(Test);
