import { Check } from 'lucide-react';
import { useMixora } from '../store';

export function Toast() {
  const { toast } = useMixora();
  if (!toast) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 bg-ink px-5 py-3 text-sm text-white shadow-lg animate-fade-up">
      <Check size={16} className="text-emerald-300" />
      {toast}
    </div>
  );
}
