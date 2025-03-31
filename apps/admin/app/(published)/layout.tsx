import React from 'react';
import NewsLetterSidebar from '@/app/_components/newsletterSidebar';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <NewsLetterSidebar />
      {children}
    </div>
  );
}

export default layout;
