import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-paper dark:bg-[#06101f]"
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-ink font-display text-lg font-extrabold text-white shadow-glow dark:bg-white dark:text-ink">
              {profile.initials}
            </div>
            <div className="h-2 w-56 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Preparing portfolio</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
