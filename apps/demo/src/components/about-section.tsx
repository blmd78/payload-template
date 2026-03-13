export type AboutData = {
  eyebrow?: string | null;
  title: string;
  paragraphs?: { text: string }[] | null;
};

export function AboutSection({ about }: { about: AboutData }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            {about.eyebrow && (
              <p className="text-xs font-medium tracking-widest text-stone-400 uppercase">
                {about.eyebrow}
              </p>
            )}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {about.title}
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="max-w-lg">
              {about.paragraphs?.map((p, i) => (
                <p key={i} className={`text-base leading-relaxed text-stone-600 ${i > 0 ? 'mt-5' : ''}`}>
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
