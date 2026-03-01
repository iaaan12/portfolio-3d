'use client';
import { cn } from '../../lib/utils.js';
import { useState, createContext, useContext } from 'react';
import {
    motion,
    MotionValue,
    SpringOptions,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';

const ImageComparisonContext = createContext<
    | {
        sliderPosition: number;
        setSliderPosition: (pos: number) => void;
    }
    | undefined
>(undefined);

type ImageComparisonProps = {
    children: React.ReactNode;
    className?: string;
    enableHover?: boolean;
    springOptions?: SpringOptions;
    onLeftClick?: () => void;
    onRightClick?: () => void;
};

const DEFAULT_SPRING_OPTIONS = {
    bounce: 0,
    duration: 0,
};

function ImageComparison({
    children,
    className,
    enableHover,
    onLeftClick,
    onRightClick,
}: Omit<ImageComparisonProps, "springOptions">) {
    const [isDragging, setIsDragging] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging && !enableHover) return;

        const containerRect = (
            event.currentTarget as HTMLElement
        ).getBoundingClientRect();
        const x =
            'touches' in event
                ? event.touches[0].clientX - containerRect.left
                : (event as React.MouseEvent).clientX - containerRect.left;

        const percentage = Math.min(
            Math.max((x / containerRect.width) * 100, 0),
            100
        );
        setSliderPosition(percentage);
    };

    const handleClick = (e: React.MouseEvent) => {
        // Only trigger click if not dragging
        if (isDragging) return;

        const containerRect = (
            e.currentTarget as HTMLElement
        ).getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const clickPercentage = (x / containerRect.width) * 100;

        if (clickPercentage <= sliderPosition) {
            onLeftClick?.();
        } else {
            onRightClick?.();
        }
    };

    return (
        <ImageComparisonContext.Provider
            value={{ sliderPosition, setSliderPosition }}
        >
            <div
                className={cn(
                    'relative select-none overflow-hidden cursor-pointer',
                    enableHover && 'cursor-ew-resize',
                    className
                )}
                onMouseMove={handleDrag}
                onMouseDown={() => !enableHover && setIsDragging(true)}
                onMouseUp={() => !enableHover && setIsDragging(false)}
                onMouseLeave={() => !enableHover && setIsDragging(false)}
                onTouchMove={handleDrag}
                onTouchStart={() => !enableHover && setIsDragging(true)}
                onTouchEnd={() => !enableHover && setIsDragging(false)}
                onClick={handleClick}
            >
                {children}
            </div>
        </ImageComparisonContext.Provider>
    );
}

const ImageComparisonImage = ({
    className,
    alt,
    src,
    position,
}: {
    className?: string;
    alt: string;
    src: string;
    position: 'left' | 'right';
}) => {
    const { sliderPosition } = useContext(ImageComparisonContext)!;

    // We compute the clip paths based directly on the number, without framer-motion lag
    const clipPath = position === 'left'
        ? `inset(0 0 0 ${sliderPosition}%)`
        : `inset(0 ${100 - sliderPosition}% 0 0)`;

    return (
        <img
            src={src}
            alt={alt}
            className={cn('absolute inset-0 h-full w-full object-cover', className)}
            style={{ clipPath }}
        />
    );
};

const ImageComparisonSlider = ({
    className,
    children,
}: {
    className: string;
    children?: React.ReactNode;
}) => {
    const { sliderPosition } = useContext(ImageComparisonContext)!;

    return (
        <div
            className={cn('absolute bottom-0 top-0 w-1 cursor-ew-resize', className)}
            style={{
                left: `${sliderPosition}%`,
            }}
        >
            {children}
        </div>
    );
};

export { ImageComparison, ImageComparisonImage, ImageComparisonSlider };
