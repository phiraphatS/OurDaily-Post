import ResponsiveMenuBar from '@/shared-component/client-component/menu-bar';
import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResponsiveMenuBar>
      {children}
    </ResponsiveMenuBar>
  );
}
