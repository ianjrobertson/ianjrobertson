'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type PageAnimationProps = {
    children: ReactNode;
    delay?: number;
};

export default function PageAnimation({ children, delay = 0 }: PageAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    )
}
