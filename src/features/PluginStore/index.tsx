import { Modal } from '@lobehub/ui';
import { Segmented } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useServerConfigStore } from '@/store/serverConfig';
import { useToolStore } from '@/store/tool';
import { enableAuth } from '@/const/auth';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/selectors';

import InstalledPluginList from './InstalledPluginList';
import OnlineList from './OnlineList';
import UserLoginOrSignup from '../User/UserLoginOrSignup';

interface PluginStoreProps {
  closePopover: () => void;
  open?: boolean;
  setOpen: (open: boolean) => void;
}
export const PluginStore = memo<PluginStoreProps>(({ closePopover, setOpen, open }) => {
  const isLoginWithAuth = useUserStore(authSelectors.isLoginWithAuth);
  const [openSignIn] = useUserStore((s) => [s.openLogin, s.logout]);
  const { t } = useTranslation('plugin');
  const mobile = useServerConfigStore((s) => s.isMobile);
  const [listType] = useToolStore((s) => [s.listType]);
  const handleSignIn = () => {
    closePopover();
    openSignIn();
  };

  return (
    <Modal
      allowFullscreen
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      open={open}
      styles={{ body: { overflow: 'hidden' } }}
      title={t('store.title')}
      width={800}
    >
      {!enableAuth || (enableAuth && isLoginWithAuth) ? (
        <Flexbox
          gap={mobile ? 8 : 16}
          style={{ maxHeight: mobile ? '-webkit-fill-available' : 'inherit' }}
          width={'100%'}
        >
          <Segmented
            block
            onChange={(v) => {
              useToolStore.setState({ listType: v as any });
            }}
            options={[
              { label: t('store.tabs.all'), value: 'all' },
              { label: t('store.tabs.installed'), value: 'installed' },
            ]}
            style={{ flex: 1 }}
            value={listType}
          />
          {listType === 'all' ? <OnlineList /> : <InstalledPluginList />}
        </Flexbox>
      ) : (
        <UserLoginOrSignup onClick={handleSignIn} />
      )}
    </Modal>
  );
});

export default PluginStore;
