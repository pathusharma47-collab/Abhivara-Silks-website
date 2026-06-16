import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import emblemAsset from "@/assets/emblem-transparent.png";
import logoAsset from "@/assets/logo-transparent.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory pointer-events-none will-change-[opacity]"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: [0, 90, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            >
              <img
                src={emblemAsset}
                alt="Abivara Symbol"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>
            
            <motion.div className="overflow-hidden">
              <motion.img
                src={logoAsset}
                alt="Abivara Silks"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="h-12 md:h-16 w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}