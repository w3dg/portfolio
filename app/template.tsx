import { ReactNode } from "react";
import { MotionDiv } from "./lib/framer";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 100, y: 0 }}>
      {children}
    </MotionDiv>
  );
}
