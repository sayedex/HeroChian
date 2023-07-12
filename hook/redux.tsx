import {TypedUseSelectorHook,useDispatch,useSelector} from "react-redux"
import type { RootState,AppDispatch } from "../Store/store"

export const useAppSelector :TypedUseSelectorHook<RootState> =useSelector
export const useAppdispatch =()=>useDispatch<AppDispatch>()
