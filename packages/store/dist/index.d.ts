export declare type Movie = {
    title: string;
    image: string;
};
export declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    movies: Movie[];
    addMovie: (movie: Movie) => void;
}>>;
//# sourceMappingURL=index.d.ts.map