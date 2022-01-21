// react
import { LinkHTMLAttributes } from 'react';

// router
import { LinkProps } from 'react-router-dom';

// export types
export interface CustomLinkProps
  extends LinkProps<LinkHTMLAttributes<HTMLLinkElement>> {
  className?: string;
}
