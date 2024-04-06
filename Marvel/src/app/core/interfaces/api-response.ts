import { ApiDataI } from "./api-data";

export interface ApiResponse<T> {
    attributionHTML: string;
    attributionText: string;
    code: number;
    copyright: string;
    etag: string;
    status: string;
    data: ApiDataI<T>;
}