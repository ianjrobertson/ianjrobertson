'use client'

import { motion } from 'framer-motion';

import { ReactNode } from 'react';

type AnimatedSectionProps = {
    children: ReactNode;
    delay?: number;
};

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className=""
        >
            {children}
        </motion.section>
    )
}