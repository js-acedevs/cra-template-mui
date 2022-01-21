// react
import { ReactElement } from 'react';

// molecules
import { FollowLink } from '@molecules/index';

// templates
import { PageTemplate } from '@templates/index';

const RootPage = (): ReactElement => (
  <PageTemplate title="Root">
    <div >
      <FollowLink />
    </div>
  </PageTemplate>
);

export default RootPage;
