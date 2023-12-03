'use client'

import React, { createContext, useContext, useState } from 'react'

interface WeightInfo {
  id: string
  weight: number
  created_at: string
}

interface WeightContextType {
  weightInfo: WeightInfo[]
  setWeightInfo: React.Dispatch<React.SetStateAction<WeightInfo[]>>
  calibInfo: boolean
  setCalibInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export const WeightContext = createContext<WeightContextType | undefined>(
  undefined,
)

export function useWeightContext() {
  const context = useContext(WeightContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return context
}

export function WeightContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [weightInfo, setWeightInfo] = useState<WeightInfo[]>([])
  const [calibInfo, setCalibInfo] = useState<boolean>(false)

  return (
    <WeightContext.Provider
      value={{ weightInfo, setWeightInfo, calibInfo, setCalibInfo }}
    >
      {children}
    </WeightContext.Provider>
  )
}
