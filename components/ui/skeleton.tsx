import { cn } from "@/lib/utils"

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-spin cp:animate-pulse rounded-md bg-black pt-20 p-6", className)}
      {...props}
    />
  )
}

export default Skeleton;
