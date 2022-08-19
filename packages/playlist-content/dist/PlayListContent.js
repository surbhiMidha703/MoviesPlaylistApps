import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Title, Grid } from "@mantine/core";
import { useStore } from "store";
import { MovieCard } from "card";
export const PlaylistContent = () => {
    const { movies } = useStore();
    console.log('movies=> ', movies);
    return (_jsxs(_Fragment, { children: [_jsx(Box, { children: _jsx(Title, { children: "Viewing List" }) }), _jsx(Grid, Object.assign({ mt: 20, sx: {
                    gap: "1rem",
                } }, { children: movies.map((movie) => (_createElement(MovieCard, Object.assign({}, movie, { key: movie.title })))) }))] }));
};
