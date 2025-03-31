import { ReactNode } from 'react';
import Sidebar from '@/app/_components/sidebar';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default layout;
