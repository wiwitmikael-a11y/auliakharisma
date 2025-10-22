import React from 'react';

interface IconProps {
    className?: string;
}

// --- Ikon Layanan Baru ---
export const BuildingIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
    </svg>
);


export const BridgeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h18M7.5 10.5V20.25m3-9.75V20.25m3-9.75V20.25m3-9.75V20.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.25a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 5.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25c0-1.518 1.232-2.75 2.75-2.75h11a2.75 2.75 0 012.75 2.75" />
    </svg>
);

export const BlueprintIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Ikon Lainnya ---
export const HardHatIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M16.14 3.398c.28-.42.824-.553 1.243-.273.42.28.553.824.273 1.243l-3.355 5.032a3.75 3.75 0 01-5.717 1.523l-3.355-2.236a3.75 3.75 0 01-1.523-5.717L7.06 3.033a3.75 3.75 0 015.717-1.523l3.355 2.236-1.928 2.893a.75.75 0 01-1.243-.273l1.173-1.76z" clipRule="evenodd" />
        <path d="M5.56 12.56a3.75 3.75 0 00-5.408 2.01l-.066.125a.75.75 0 00.58 1.06l1.83.61c.207.07.428.093.649.074l3.193-.532a3.75 3.75 0 002.83-2.217L12.015 12h-6.455zm2.93 1.637a2.25 2.25 0 00-1.697 1.33l-2.24 3.733a.75.75 0 00.995.995l3.733-2.24a2.25 2.25 0 001.33-1.697l-2.12-2.121z" />
        <path d="M19.75 12a.75.75 0 00-1.5 0v3.313a.75.75 0 101.5 0V12zm-3.13 5.372a.75.75 0 10-1.243-.829l-3.355 5.032a.75.75 0 00.995.995l5.033-3.355a.75.75 0 00-.429-1.843z" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a4.5 4.5 0 00-4.43 5.923l-2.36 3.775M12 7.5a4.5 4.5 0 014.43 5.923l2.36 3.775M8.5 12.5l-1.5 2.5M15.5 12.5l1.5 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5l-1.5 1M14.5 14.5l1.5 1M10 10.5l-1.5 1 1.5 1M14 10.5l1.5 1-1.5 1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    </svg>
);