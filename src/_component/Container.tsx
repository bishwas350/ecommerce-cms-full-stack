'use client';

import { ReactNode } from "react";



const Container = ({ children }: { children: ReactNode }) => {
  return <div className={`max-w-[1320px] m-auto `}>{children}</div>;
};

export default Container;
