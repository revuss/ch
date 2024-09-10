import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpTransition,
  fadeInUpVariants,
  pageTransition,
  pageVariants,
} from "./transitions";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-container overflow-x-hidden"
      >
        {children}
      </motion.div>
    </>
  );
}

export function FadeInUpTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={fadeInUpVariants}
        transition={fadeInUpTransition}
        className="page-container overflow-x-hidden"
      >
        {children}
      </motion.div>
    </>
  );
}
