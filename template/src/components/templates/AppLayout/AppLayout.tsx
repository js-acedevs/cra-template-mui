// react
import { FC, ReactElement } from 'react';

// organisms
import { Header } from '@organisms/index';

export const AppLayout: FC = ({ children }): ReactElement => (
  <div>
    <Header />
    {children}
  </div>
);

