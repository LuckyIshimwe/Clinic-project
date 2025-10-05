import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards({title, value, increasing, percentage, footerHeader, footerDescription}) {
  return (
    <Card className="shadow-none bg-gradient-to-b from-white to-gray-100">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardDescription>{title}</CardDescription>
          <Badge variant="outline" className="gap-1">
            {increasing ? 
              <TrendingUp className="size-3" />
            :
              <TrendingDown className="size-3" />
            }
            {percentage}
          </Badge>
        </div>
        <CardTitle className="text-3xl font-bold tabular-nums">
          {value}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex items-center gap-2 font-medium">
          {footerHeader}
          {increasing ? <TrendingUp className="size-4 text-green-600" /> : <TrendingDown className="size-4 text-red-600" />}
        </div>
        <div className="text-muted-foreground">
          {footerDescription}
        </div>
      </CardFooter>
    </Card>
  )
}
