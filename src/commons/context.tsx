import { createContext } from "react";

export const dialogContext = createContext({
    open: false,
    setOpen: (open: boolean) => {}
})