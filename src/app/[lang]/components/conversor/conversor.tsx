'use client'

import { useState } from 'react'

import { TimeConverterProcessorFacade } from '@andersonnascimentoafsn/utils'

// import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/[lang]/components/ui/card"
import { Input } from "@/app/[lang]/components/ui/input"
import { Label } from "@/app/[lang]/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/[lang]/components/ui/tabs"
import { IDictionary } from '@/dictionaries/type'

export function Conversor({ dictionary }: { dictionary: IDictionary }) {
  const [time, setTime] = useState('00:00')
  const [decimal, setDecimal] = useState(0)

  const converterTime =  new TimeConverterProcessorFacade()

  const timeDecimal = converterTime.fromTimeToDecimal(time)
  const decimalTime = converterTime.fromDecimalToTime(decimal)

  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-5xl font-bold">{dictionary.time.title}</h1>

      <Tabs defaultValue="time-decimal" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="time-decimal">{dictionary.time.tab_time_decimal.title}</TabsTrigger>
          <TabsTrigger value="decimal-time">{dictionary.time.tab_decimal_time.title}</TabsTrigger>
        </TabsList>
        <TabsContent value="time-decimal">
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.time.tab_time_decimal.content.title}</CardTitle>
              <CardDescription>
                {dictionary.time.tab_time_decimal.content.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="time">{dictionary.time.tab_time_decimal.content.input.label}</Label>
                <Input id="time" defaultValue="00:00" placeholder="00:00" onChange={(e: any) => setTime(e.target.value)} />
              </div>
            </CardContent>

            <CardFooter>
              {/* <Button>Converter</Button> */}
              {dictionary.time.tab_time_decimal.content.output.label}: {timeDecimal}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="decimal-time">
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.time.tab_decimal_time.content.title}</CardTitle>
              <CardDescription>
                {dictionary.time.tab_decimal_time.content.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="decimal">{dictionary.time.tab_decimal_time.content.input.label}</Label>
                <Input id="decimal" type="number" defaultValue={0.000} onChange={(e: any) => setDecimal(Number(e.target.value))} />
              </div>
            </CardContent>

            <CardFooter>
              <div>
                <div className="space-y-1">
                {dictionary.time.tab_decimal_time.content.output.label}: {decimalTime}
                </div>

                {/* <Button className='mt-2'>Converter</Button> */}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
