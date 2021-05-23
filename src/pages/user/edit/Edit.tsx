import React from 'react';
import UserEdit from '../../../components/UserEdit/UserEdit';
import { useParams } from 'react-router';

const UserAddPage = () => {
  const { id } = useParams<{id: string}>();
  return <UserEdit id={id} />;
}

export default UserAddPage;
