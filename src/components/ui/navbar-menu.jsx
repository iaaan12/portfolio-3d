"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-[var(--text2)] hover:text-[var(--color-white)] transition-colors text-[0.75rem] tracking-[0.1em] uppercase m-0 flex items-center h-full"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-[rgba(8,12,20,0.9)] backdrop-blur-xl rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative flex justify-center space-x-8"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}) => {
    return (
        <a href={href} className="flex space-x-4 group/item">
            <img
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-xl shadow-2xl border border-white/5 group-hover/item:scale-105 transition-transform"
            />
            <div className="flex flex-col justify-center">
                <h4 className="text-sm font-bold mb-1 text-white">
                    {title}
                </h4>
                <p className="text-zinc-500 text-xs max-w-[10rem]">
                    {description}
                </p>
            </div>
        </a>
    );
};

export const HoveredLink = ({ children, ...rest }) => {
    return (
        <a
            {...rest}
            className="text-zinc-400 hover:text-primary-400 transition-colors text-sm"
        >
            {children}
        </a>
    );
};
