'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { ScrollArea } from './ui/scroll-area'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useWeightContext } from '@/context/WeightContext'
import { RefreshCcw } from 'lucide-react'
import { LineWobble } from '@uiball/loaders'

type MeasureProps = {
  id: string
  weight: number
  created_at: string
}

export default function Home() {
  const [measures, setMeasures] = useState<MeasureProps[]>([])
  const { weightInfo, setWeightInfo } = useWeightContext()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (weightInfo.length === 0) {
      getMeasures()
    } else {
      setMeasures(weightInfo)
    }
  }, [])

  async function getMeasures() {
    setMeasures([])
    setIsLoading(true)

    try {
      const res = await api.get('/api/weight')

      if (res.status === 200) {
        setMeasures(res.data.measures)
        setWeightInfo(res.data)
        setIsLoading(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="dark mb-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-amber-500">
            <p className="flex items-center gap-2">
              History{' '}
              <RefreshCcw
                onClick={getMeasures}
                className="text-zinc-200 transition-all ease-linear active:rotate-90"
                size={16}
              />
            </p>
          </CardTitle>
          <CardDescription>Track your last measures</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex w-full justify-center">
              <LineWobble color="#f59e0b" />
            </div>
          ) : (
            <p className="text-2xl font-bold text-zinc-200">
              {measures[0]?.weight} <span className="font-medium">kg</span>
            </p>
          )}
        </CardContent>
        <CardFooter>
          <ScrollArea className="h-72 w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Weight (kg)</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {measures.map((measure) => (
                  <TableRow key={measure.id}>
                    <TableCell>{measure.weight}</TableCell>
                    <TableCell>{measure.created_at}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardFooter>
      </Card>
    </div>
  )
}
