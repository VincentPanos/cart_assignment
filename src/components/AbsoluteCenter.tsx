import * as React from "react";

export function AbsoluteCenter({ children }: React.PropsWithChildren) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}
