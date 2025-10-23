// Fix: Import React namespace to use React.FC, React.ReactNode, and React.createElement.
import React, { useRef, useState, useEffect, createContext, useContext } from 'react';
import { translations, TranslationContent } from '../lib/translations';

/**
 * Custom hook for 'reveal on scroll' animations.
 * Uses IntersectionObserver to detect when an element enters the viewport.
 * @returns {object} An object containing the `ref` to attach to an element
 * and an `isVisible` boolean state.
 */
export const useRevealAnimation = () => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is intersecting, update state and unobserve.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function to unobserve on component unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return { ref, isVisible };
};

// --- Theme Context ---
type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        // Set light theme as default for first-time visitors.
        // If a theme is stored in localStorage, use that.
        const initialTheme = storedTheme || 'light';
        setTheme(initialTheme);
    }, []);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    // Fix: Replaced JSX with React.createElement to resolve parsing errors in .ts file.
    // The TypeScript compiler was interpreting the JSX as comparison operators.
    return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// --- Language Context ---
type Language = 'id' | 'en';

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    content: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('id');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang') as Language | null;
        setLang(storedLang || 'id'); // Default to Indonesian
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang(prevLang => (prevLang === 'id' ? 'en' : 'id'));
    };

    const content = translations[lang];

    return React.createElement(LanguageContext.Provider, { value: { lang, toggleLang, content } }, children);
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
