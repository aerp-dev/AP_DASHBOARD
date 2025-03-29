import{type TypedUseSelectorHook,useSelector}from'react-redux'
import{IRootState}from'types'
export default useSelector as TypedUseSelectorHook<IRootState>