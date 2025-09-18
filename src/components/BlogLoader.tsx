// components/BlogLoader.tsx
export default function BlogLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="w-full max-w-[672px] mx-auto">
      <div className="animate-pulse">
        {/* Search box skeleton */}
        <div className="h-10 bg-bg-blog rounded mb-6"></div>

        {/* Popular blogs skeleton */}
        <div className="h-8 w-40 bg-bg-blog rounded mb-4"></div>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={`popular-${idx}`}
            className="flex flex-col w-full p-4 bg-bg-blog rounded-md mb-4"
          >
            <div className="flex justify-between">
              <div className="h-4 w-1/2 bg-bg-blog rounded"></div>
              <div className="h-4 w-20 bg-bg-blog rounded"></div>
            </div>
          </div>
        ))}

        {/* All posts skeleton */}
        <div className="h-8 w-40 bg-bg-blog rounded mt-6 mb-4"></div>
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={`post-${idx}`}
            className="flex flex-col w-full p-4 bg-bg-blog rounded-md mb-4"
          >
            <div className="flex justify-between">
              <div className="h-4 w-1/2 bg-bg-blog rounded"></div>
              <div className="h-4 w-16 bg-bg-blog rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
