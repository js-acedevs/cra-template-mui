// react
import { ReactElement } from 'react';

// atoms
import { CustomLink } from '@atoms/index';

export const FollowLink = (): ReactElement => (
  <div>
    <p>
      Visit{' '}
      <CustomLink
        target="_blank"
        to={{
          pathname: 'https://github.com/js-acedevs/cra-template-mui.git',
        }}
      >
        cra-template-mui
      </CustomLink>{' '}
      for template details
    </p>
  </div>
);

