import { Dispatch, SetStateAction } from 'react'

export type FilterType = Record<string, string>

export type FilterContextType = [
  FilterType,
  Dispatch<SetStateAction<FilterType>>
]
