import { motion } from "framer-motion"

const Header = () => {
    return (
        <motion.h1 
            className="text-6xl font-bold text-primary-300 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            Stock Analyzer
        </motion.h1>
    )
}

export default Header
