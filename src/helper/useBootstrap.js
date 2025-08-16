// src/helper/useBootstrap.js
'use client';
import { useEffect } from 'react';

export default function useBootstrap() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(() => {});
  }, []);
}
