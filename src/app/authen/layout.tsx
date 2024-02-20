import ResponsiveMenuBar from '@/shared-component/client-component/menu-bar';
import { Box } from '@chakra-ui/react';
import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // <ResponsiveMenuBar>
    <Box width="full">
      {children}
    </Box>
    // </ResponsiveMenuBar>
  );
}
