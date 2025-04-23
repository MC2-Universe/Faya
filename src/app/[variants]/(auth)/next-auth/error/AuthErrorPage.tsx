'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

import ErrorCapture from '@/components/Error';

enum ErrorEnum {
  AccessDenied = 'AccessDenied',
  Configuration = 'Configuration',
  Default = 'Default',
  Verification = 'Verification',
}

const errorMap = {
  [ErrorEnum.Configuration]: 'Wrong configuration, please try again.',
  [ErrorEnum.AccessDenied]: 'Access was denied. Please create an account and try again. ',
  [ErrorEnum.Verification]: 'Verification error, please try again.',
  [ErrorEnum.Default]: 'There was a problem when trying to authenticate. Please try again.',
};

export default memo(() => {
  const search = useSearchParams();
  const error = search.get('error') as ErrorEnum;
  const props = {
    error: {
      cause: error,
      message: errorMap[error] || 'Unknown error type.',
      name: 'NextAuth Error',
    },
    reset: () => signIn(undefined, { callbackUrl: '/' }),
  };
  console.log('[NextAuth] Error:', props.error);
  return <ErrorCapture {...props} />;
});
