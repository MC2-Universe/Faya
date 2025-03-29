import { useQueryState } from 'nuqs';

import { DiscoverTab } from '@/types/discover';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/selectors';

export const useDiscoverTab = () => {
  const [type] = useQueryState('type', {
    clearOnDefault: true,
    defaultValue: DiscoverTab.Assistants,
  });
  const isLogin = useUserStore(authSelectors.isLogin);

  return { type, isLoading: isLogin };

  // return type as DiscoverTab;
};
