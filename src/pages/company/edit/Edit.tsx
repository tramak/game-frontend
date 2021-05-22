import React from 'react';
import CompanyEdit from '../../../components/CompanyEdit/CompanyEdit';
import { useParams } from 'react-router';

const CompanyEditPage = () => {
  const { id } = useParams<{id: string}>();
  return <CompanyEdit id={id} />;
}

export default CompanyEditPage;
