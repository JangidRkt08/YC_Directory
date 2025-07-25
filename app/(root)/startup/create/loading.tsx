
export default function Loading() {
  return (
    <section className="p-6 space-y-6 animate-pulse max-w-3xl mx-auto">
      <div className="h-10 w-1/2 bg-gray-300 rounded" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-1/3 bg-gray-300 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      ))}
      {/* Simulated pitch editor */}
      <div className="space-y-2">
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
        <div className="h-48 w-full bg-gray-200 rounded" />
      </div>
      {/* Submit button skeleton */}
      <div className="h-10 w-40 bg-gray-300 rounded" />
    </section>
  );
}
