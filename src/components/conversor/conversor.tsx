'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import { TimeConverter } from 'andersonnascimentoafsn-utils'

// import { Button } from "@/components/ui/button"

const CurrentDate = dynamic(() => import('../current-date').then(
  (mod) => mod.CurrentDate),
  { ssr: false, loading: () => <p>Loading...</p> }
)

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Conversor() {
  const [time, setTime] = useState('00:00')
  const [decimal, setDecimal] = useState(0)

  function convertTimeToDecimal() {
    if (!TimeConverter.isValidTimeFormat(time)) return
    return TimeConverter.timeToDecimal(time)
  }

  function convertDecimalToTime() {
    return TimeConverter.decimalToTime(decimal)
  }

  const timeDecimal = convertTimeToDecimal()
  const decimalTime = convertDecimalToTime()

  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-5xl font-bold">Conversões</h1>

      <Tabs defaultValue="time-decimal" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="time-decimal">Tempo-Decimal</TabsTrigger>
          <TabsTrigger value="decimal-time">Decimal-Tempo</TabsTrigger>
        </TabsList>
        <TabsContent value="time-decimal">
          <Card>
            <CardHeader>
              <CardTitle>Tempo Decimal</CardTitle>
              <CardDescription>
                Converta o tempo em formato de string 00:00 para decimal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="time">Tempo</Label>
                <Input id="time" defaultValue="00:00" placeholder="00:00" onChange={(e: any) => setTime(e.target.value)} />
              </div>
            </CardContent>

            <CardFooter>
              {/* <Button>Converter</Button> */}
              Valor convertido: {timeDecimal}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="decimal-time">
          <Card>
            <CardHeader>
              <CardTitle>Decimal Time</CardTitle>
              <CardDescription>
                Converta um decimal para o formato de tempo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="decimal">Decimal</Label>
                <Input id="decimal" type="number" defaultValue={0.000} onChange={(e: any) => setDecimal(Number(e.target.value))} />
              </div>
            </CardContent>

            <CardFooter>
              <div>
                <div className="space-y-1">
                  Valor convertido: {decimalTime}
                </div>

                {/* <Button className='mt-2'>Converter</Button> */}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <CurrentDate />
    </div>
  )
}
