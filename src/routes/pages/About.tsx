import { motion, AnimatePresence } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <h1>About page!</h1>
      <AnimatePresence>
        <motion.div
          initial={{ width: '10px', backgroundColor: 'royalblue' }}
          animate={{ width: '200px', backgroundColor: 'royalblue' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          <div
            style={{ height: '100px' }}
            className="show"></div>
          <div
            style={{ height: '100px' }}
            className="hide"></div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
