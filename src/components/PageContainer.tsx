import * as React from "react";

export const PageContainer = ({ children }: React.PropsWithChildren) => (
  <div className="max-w-screen-2xl w-full mx-auto pb-4 px-4 sm:px-8 xl:px-12">
    {children}
  </div>
);
