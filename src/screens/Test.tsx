import React from 'react';
import { useUserQuery } from 'src/generated/graphql';

export const Test: React.FC = () => {
  const { data, loading, error } = useUserQuery({
    fetchPolicy: 'network-only',
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <div>
      username: {data?.myUser.username}, email: {data?.myUser.email}, role:{' '}
      {data?.myUser.role}
    </div>
  );
};
