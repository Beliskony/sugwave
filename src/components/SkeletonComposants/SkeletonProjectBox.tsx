import { Skeleton } from "../ui/skeleton"

export default function ProjectBoxSkeleton() {
  return (
    <div
      className="relative rounded-lg overflow-hidden border border-gray-50
      h-[400px] w-[300px] max-sm:h-[300px] max-sm:w-[190px] max-sm:rounded-md"
      style={{ minHeight: 180 }}
    >
      {/* Background image skeleton */}
      <Skeleton className="absolute inset-0 w-full h-full bg-gray-500" />

      {/* Overlay content skeleton */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        <Skeleton className="h-6 w-3/4 mb-4 rounded-md bg-gray-300" />
        <Skeleton className="h-4 w-2/3 rounded-md bg-gray-300" />
      </div>
    </div>
  )
}
