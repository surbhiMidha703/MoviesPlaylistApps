import React from 'react';
export declare type Route = {
    element: React.FC;
    path: string;
};
export declare type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: React.FC<{
    title: string;
    routes: Route[];
    colorScheme?: "light" | "dark";
    navLinks: NavLink[];
}>;
//# sourceMappingURL=index.d.ts.map