"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Leaf } from 'lucide-react'

const EnvMeter = () => (
  <Card className="mb-6 bg-gradient-to-br from-green-100 to-yellow-100 shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg text-green-800">Environmental Meter</CardTitle>
    </CardHeader>
    <CardContent>
      <Progress value={70} className="h-4 mb-2 bg-yellow-200" indicatorClassName="bg-green-500" />
      <div className="flex justify-between text-sm text-green-700">
        <span>Worst</span>
        <span>Benchmark</span>
        <span>Best</span>
      </div>
    </CardContent>
  </Card>
)

const CircularDiagram = () => {
  const data = [
    { name: 'Supplier', value: 20 },
    { name: 'Producer', value: 20 },
    { name: 'Retailer', value: 20 },
    { name: 'End Consumer', value: 20 },
    { name: 'Recycle', value: 20 },
  ]
  const COLORS = ['#4ade80', '#fde047', '#38bdf8', '#fb923c', '#a78bfa']

  return (
    <Card className="mb-6 bg-gradient-to-br from-green-100 to-yellow-100 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg text-green-800">Circular Economy</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
          </div>
        </ChartContainer>
        <div className="text-center mt-4 text-3xl font-bold text-green-800">7/10</div>
      </CardContent>
    </Card>
  )
}

const InstructionModal = ({ title, instructions }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="bg-yellow-400 text-green-800 hover:bg-yellow-500">
        Instructions
      </Button>
    </DialogTrigger>
    <DialogContent className="bg-gradient-to-br from-green-100 to-yellow-100 border-2 border-green-500">
      <DialogHeader>
        <DialogTitle className="text-2xl text-green-800 flex items-center">
          <Leaf className="mr-2 h-6 w-6 text-green-600" />
          {title} Instructions
        </DialogTitle>
      </DialogHeader>
      <div className="mt-4 text-green-800">
        <ul className="list-disc list-inside space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
)

const DisposalSection = () => (
  <Card className="mb-6 bg-gradient-to-br from-green-100 to-yellow-100 shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg text-green-800">Disposal Instructions</CardTitle>
    </CardHeader>
    <CardContent>
      {[
        { item: 'Packaging', instructions: ['Remove all labels', 'Rinse containers', 'Separate by material type'] },
        { item: 'Clothing', instructions: ['Check for donation eligibility', 'Remove non-textile parts', 'Bag clean, dry items'] },
        { item: 'Metal Tags', instructions: ['Collect all metal tags', 'Remove any fabric attachments', 'Place in metal recycling bin'] },
      ].map(({ item, instructions }) => (
        <div key={item} className="flex justify-between items-center mb-2">
          <span className="text-green-800">{item}</span>
          <InstructionModal title={item} instructions={instructions} />
        </div>
      ))}
    </CardContent>
  </Card>
)

const RecycleSection = () => (
  <Card className="mb-6 bg-gradient-to-br from-green-100 to-yellow-100 shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg text-green-800">Recycle & Earn Rewards</CardTitle>
    </CardHeader>
    <CardContent>
      {[
        { name: 'Recykal', reward: '£ 44' },
        { name: 'Unforus', reward: '£ 30 + £15' },
        { name: 'Other', reward: '£ ...' },
      ].map((item) => (
        <div key={item.name} className="flex justify-between items-center mb-2">
          <span className="text-green-800">{item.name}</span>
          <div className="flex items-center">
            <span className="mr-2 text-green-600 font-semibold">{item.reward}</span>
            <Button variant="outline" size="sm" className="bg-yellow-400 text-green-800 hover:bg-yellow-500">
              Sell
            </Button>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
)

export function EnvironmentalFootprint() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-green-200 to-yellow-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">Total Environmental Footprint</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <EnvMeter />
        <CircularDiagram />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <DisposalSection />
        <RecycleSection />
      </div>
      <Card className="bg-gradient-to-br from-green-100 to-yellow-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-green-800">Circular Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <span className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-2xl font-semibold shadow-md">
              £30-40 / £80
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}