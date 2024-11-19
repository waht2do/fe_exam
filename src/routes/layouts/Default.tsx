import Header from '@/components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollRestoration, useLocation, useOutlet } from 'react-router-dom'

export default function DefaultLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }} // 부모 요소 기준으로 배치(겹치게 됨)
          transition={{ duration: 1 }}>
          {/* <Outlet /> */}
          {outlet}
        </motion.div>
      </AnimatePresence>

      <ScrollRestoration />
    </>
  )
}
