export default function Loading() {
  return (
    <div className="relative w-6 h-6">
      <div className="absolute left-0 top-0 w-full h-full rounded-full border-4 border-white border-opacity-30" />
      <div className="absolute left-0 top-0 w-full h-full rounded-full border-4 border-t-white border-transparent animate-spin" />
    </div>
  );
}
