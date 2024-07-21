import React from "react";
import { motion } from "framer-motion";

const CallToAction = ({text, styles}) => {
    return(
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${styles} font-semibold font-mono px-10 py-3 rounded text-lg`}>
                {text}
        </motion.button>
    );
}

export default CallToAction;