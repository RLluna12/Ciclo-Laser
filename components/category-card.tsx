import Link from 'next/link'
import { Bike, Sticker, HardHat, CircleDot, Armchair, Grip, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface CategoryCardProps {
  id: string
  name: string
  icon: string
}

const iconMap: Record<string, React.ElementType> = {
  bike: Bike,
  sticker: Sticker,
  helmet: HardHat,
  tire: CircleDot,
  seat: Armchair,
  grip: Grip,
  accessory: Wrench,
}

export function CategoryCard({ id, name, icon }: CategoryCardProps) {
  const Icon = iconMap[icon] || Bike

  return (
    <Link href={`/produtos?categoria=${id}`}>
      <Card className="group hover:border-primary transition-colors cursor-pointer h-full">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-3">
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-medium text-sm">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
