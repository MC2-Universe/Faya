import { t } from 'i18next';

import { notification } from '@/components/AntdStaticMethods';
import { ProductLogo } from '@/components/Branding';

import RedirectLogin from './RedirectLogin';

export const loginRequired = {
  redirect: ({ timeout = 2000 }: { timeout?: number } = {}) => {
    notification.error({
      description: <RedirectLogin timeout={timeout} />,
      duration: timeout / 1000,
      icon: <ProductLogo size={24} />,
      message: t('loginRequired.title', { ns: 'error' }),
      showProgress: true,
      type: 'warning',
    });
  },
};
