import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  readOnly?: boolean
  precision?: number
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
}

function Rating({ 
  value, 
  readOnly = true, 
  precision = 0.1, 
  size = "sm",
  className,
  ...props 
}: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  const roundedValue = Math.round(value / precision) * precision

  return (
    <div 
      className={cn("inline-flex items-center gap-0.5", className)} 
      {...props}
    >
      {stars.map((star) => {
        const filled = star <= roundedValue
        return (
          <Star
            key={star}
            className={cn(
              sizeClasses[size],
              "transition-colors",
              filled ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
            )}
          />
        )
      })}
    </div>
  )
}

export { Rating }