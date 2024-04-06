export interface ApiDataI<T> {
    count: number;
    limit: number;
    offset: number;
    total: number;
    data: ResultsI<T>
}

export interface ResultsI<T> {
    results: T
}