import { SortByOptions } from "../global";

export const arrayToObject = (array: any, key: SortByOptions) =>
    array.reduce((obj: any, item: any) => ({
        ...obj, [item[key]]: item
    }), {}
)