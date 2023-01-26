import { correctValues } from '../interfaces/Interfaces';
interface ISortBy {
    details: correctValues;
    genres: number[];
}
export const sortBy: ISortBy = {
    details: '' as correctValues,
    genres: [],
};

export const correctSortValue = {
    correntValue: '' as correctValues,
    isDescending: undefined as boolean | undefined,
};
