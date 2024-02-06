export interface MovieInterface {
    Title: string;
    Year: string;
    Type: "movie" | "series" | "episode";
    Poster: string;
    imdbID: string;
}