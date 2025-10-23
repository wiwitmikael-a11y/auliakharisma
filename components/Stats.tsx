import React, { useState, useEffect } from 'react';
import { useRevealAnimation, useLanguage } from './hooks';

const CountUp: React.FC<{ end: number; isInView: boolean; duration?: number; suffix?: string; prefix?: string }> = ({ end, isInView, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const totalFrames = Math.round(duration / (1000 / 60)); // 60fps
        const increment = end / totalFrames;
        let animationFrameId: number;

        const animate = () => {
            start += increment;
            if (start >= end) {
                setCount(end);
            } else {
                setCount(Math.ceil(start));
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration, isInView]);

    return <span>{prefix}{count}{suffix}</span>;
};

const Stats: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();
    const { content } = useLanguage();

    const stats = [
        { value: 15, label: content.stat1Label, suffix: '+' },
        { value: 8, label: content.stat2Label, suffix: '+' },
        { value: 100, label: content.stat3Label, suffix: '%' },
        { value: 98, label: content.stat4Label, suffix: '%' }
    ];

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="py-20 bg-deep-blue text-white blueprint-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <h3 className="text-4xl md:text-5xl font-bold font-slab text-safety-orange mb-2">
                                <CountUp end={stat.value} suffix={stat.suffix} isInView={isVisible} />
                            </h3>
                            <p className="text-lg text-gray-200">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;