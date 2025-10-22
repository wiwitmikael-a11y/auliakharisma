import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook untuk menangani animasi 'reveal on scroll'.
 * Menggunakan IntersectionObserver untuk mendeteksi kapan sebuah elemen
 * masuk ke dalam viewport.
 * @returns {object} Objek yang berisi `ref` untuk ditempelkan ke elemen
 * dan `isVisible` boolean state.
 */
export const useRevealAnimation = () => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Saat elemen terlihat, update state dan berhenti mengamati.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Memicu saat 10% dari elemen terlihat
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function untuk unobserve saat komponen unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return { ref, isVisible };
};
