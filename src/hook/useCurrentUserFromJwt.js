'use client';
import { useEffect, useState } from 'react';
import getUserFromToken from '@/helper/getUserFromToken';

const useCurrentUserFromJwt = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getUserFromToken());
  }, []);
  return { user };
};

export default useCurrentUserFromJwt;
