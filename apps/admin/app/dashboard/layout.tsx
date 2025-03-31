import React from 'react';
import Sidebar from '@/app/_components/sidebar';
// import Authcontext from '@repo/context/Authcontext';

function layout({ children }: { children: React.ReactNode }) {
  return (
    // <Authcontext>
    <div className="flex">
      <Sidebar />
      {children}
    </div>
    // </Authcontext>
  );
}

export default layout;
