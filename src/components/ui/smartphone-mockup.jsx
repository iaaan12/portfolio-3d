"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Instagram, Heart, MessageCircle, Send, Bookmark, Grid, User, Settings } from "lucide-react";

export const SmartphoneMockup = ({ className }) => {
    return (
        <div className={cn("relative group perspective-1000", className)}>
            <motion.div
                initial={{ rotateY: -20, rotateX: 10, scale: 0.9, opacity: 0 }}
                whileInView={{ rotateY: -10, rotateX: 5, scale: 1, opacity: 1 }}
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden shadow-primary-500/10"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Notch / Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-800 ml-auto mr-4" />
                </div>

                {/* Screen Content - Instagram UI Mockup */}
                <div className="w-full h-full bg-black flex flex-col pt-8">
                    {/* Header */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-zinc-900">
                        <span className="font-bold text-lg text-white">iangianera_</span>
                        <div className="flex gap-4">
                            <Instagram size={20} className="text-white" />
                            <Settings size={20} className="text-white" />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="px-4 py-4 flex flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
                                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center border-2 border-black">
                                    <span className="font-bold text-xl text-white">IG</span>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-around text-center">
                                <div>
                                    <p className="font-bold text-white">12</p>
                                    <p className="text-xs text-zinc-500">Posts</p>
                                </div>
                                <div>
                                    <p className="font-bold text-white">10k</p>
                                    <p className="text-xs text-zinc-500">Followers</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-sm text-white">Ian Gianera</p>
                            <p className="text-xs text-zinc-400">Desarrollador Full Stack | CRO</p>
                            <p className="text-xs text-zinc-500 mt-1">Transformando ideas en resultados digitales 🚀</p>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 bg-zinc-800 text-white text-xs font-bold py-2 rounded-lg">Following</button>
                            <button className="flex-1 bg-zinc-800 text-white text-xs font-bold py-2 rounded-lg">Message</button>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="px-4 py-2 flex gap-4 overflow-hidden opacity-60">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900" />
                                <div className="w-8 h-1 bg-zinc-800 rounded-full" />
                            </div>
                        ))}
                    </div>

                    {/* Grid Layout Icons */}
                    <div className="flex border-t border-zinc-900 mt-2">
                        <div className="flex-1 flex justify-center py-2 border-b-2 border-white">
                            <Grid size={20} className="text-white" />
                        </div>
                        <div className="flex-1 flex justify-center py-2 border-b-2 border-transparent">
                            <User size={20} className="text-zinc-500" />
                        </div>
                    </div>

                    {/* Grid Posts */}
                    <div className="grid grid-cols-3 gap-1 mt-1 flex-1 overflow-hidden">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="aspect-square bg-zinc-900/50 border border-zinc-800/30 relative">
                                {i === 0 && (
                                    <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                                        <Instagram size={16} className="text-primary-400 opacity-50" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="px-6 py-4 border-t border-zinc-900 flex justify-between items-center bg-black">
                        <div className="w-6 h-6 rounded-md border border-zinc-800" />
                        <div className="w-6 h-6 rounded-md border border-zinc-800" />
                        <div className="w-6 h-6 rounded-md border border-zinc-800" />
                        <div className="w-6 h-6 rounded-md border border-zinc-800" />
                    </div>
                </div>

                {/* Glossy Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
            </motion.div>

            {/* Shadow Bottom */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[240px] h-10 bg-black/40 blur-3xl -z-10" />
        </div>
    );
};
