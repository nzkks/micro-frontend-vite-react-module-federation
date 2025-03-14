import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

// custom hook which returns a value and setter
const useCount = () => useAtom(countAtom);

export default useCount;
