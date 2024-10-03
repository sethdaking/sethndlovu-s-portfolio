'use client';

import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: ReactNode; // Specify the type of children
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                    initial={{ opacity: 1 }} 
                    animate={{
                        opacity: 0, 
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className='h-screen w-screen fixed bg-primary top-0 cursor-pointer-events-none pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;
