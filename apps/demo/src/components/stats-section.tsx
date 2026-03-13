export type StatsData = {
  items: { value: string; label: string }[];
};

export function StatsSection({ stats }: { stats: StatsData }) {
  return (
    <section className="border-t border-stone-200 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm text-stone-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
