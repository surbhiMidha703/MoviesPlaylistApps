import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Header, Title, MantineProvider, Navbar, UnstyledButton, Group, Text } from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from 'react-router-dom';
import { useStore } from "store";
function MainLink({ label, path }) {
    return (_jsx(Link, Object.assign({ to: path }, { children: _jsx(UnstyledButton, Object.assign({ sx: (theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                "&:hover": {
                    backgroundColor: theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                },
            }) }, { children: _jsx(Group, { children: _jsx(Text, Object.assign({ size: "sm" }, { children: label })) }) })) })));
}
export const AppShell = ({ title, colorScheme, routes, navLinks }) => {
    const { movies } = useStore();
    return (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: { colorScheme } }, { children: _jsxs(MantineAppShell, Object.assign({ navbar: _jsx(Navbar, Object.assign({ width: { base: 300 }, height: 500, p: "xs" }, { children: navLinks.map((link) => {
                        return _createElement(MainLink, Object.assign({}, link, { key: link.path }));
                    }) })), header: _jsxs(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" } }, { children: [_jsx(Title, Object.assign({ sx: { flexGrow: 1 } }, { children: title })), _jsxs(Text, Object.assign({ size: "xl" }, { children: [movies.length, " selected"] }))] })) }, { children: [_jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: _jsx(route.element, {}) }, route.path))) }), _jsx(Outlet, {})] })) })) }));
};
