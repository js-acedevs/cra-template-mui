// react
import React, { FC, ReactElement } from 'react';

// mui
import { AppBar, Container, Toolbar, AppBarProps } from '@mui/material';

// atoms
import { CustomLink } from '@atoms/index';

export const Header: FC<AppBarProps> = ({ ...rest }): ReactElement => (
  <AppBar position="static" {...rest}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <CustomLink href="/">Logo</CustomLink>
      </Toolbar>
    </Container>
  </AppBar>
);
