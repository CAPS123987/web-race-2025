import { createContext } from "react";

import PocketBase from 'pocketbase';

type GlobalContextProps = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    client: PocketBase,
}

export const GlobalContext = createContext<GlobalContextProps>({
    value: "true",
    setValue: () => {},
    client: {} as PocketBase,
})


export default GlobalContext;