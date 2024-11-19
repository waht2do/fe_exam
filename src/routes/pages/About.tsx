import { motion, AnimatePresence } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <h1>About Page!</h1>
      <AnimatePresence>
        <motion.div
          initial={{ width: '100px', backgroundColor: '#f00' }}
          animate={{ width: '200px', backgroundColor: '#0f0' }}
          exit={{}}
          transition={{ duration: 1, delay: 1 }}>
          <div
            style={{ height: '100px' }}
            className="show"></div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
