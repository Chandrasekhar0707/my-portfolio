import { useScrollProgress } from '../hooks/useScrollSpy';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
