import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IfilmList, SortOptionKeys } from '../components/interfaces/Interfaces';
import format from 'date-fns/format';

function useSortMovies(value: SortOptionKeys, array: IfilmList[]) {
    const valueSort = value;
    const [consValue, setConsValue] = useState(valueSort);
    const [corectSortValue, setCorectSortValue] = useState(
        'popularityDescending'
    );
    const [sortedArray, setSortedArray] = useState<IfilmList[]>(array);

    function sortByYear() {
        setSortedArray(
            array.filter(
                (item) => format(new Date(item.release_date), 'yyyy') !== value
            )
        );
    }

    switch (consValue) {
        case '2018':
            return sortByYear()
            break;
    
        
    }
   
  

    return [consValue, sortedArray];
}

export { useSortMovies };
