export type HeroData = {
  title: string;
  subtitle?: string | null;
  image?: { url?: string | null } | string | null;
  cta?: {
    label?: string | null;
    url?: string | null;
  };
};

export function HeroSection({ hero }: { hero: HeroData }) {
  const imageUrl =
    hero.image && typeof hero.image !== 'string' ? hero.image.url : '/hero-placeholder.jpg';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white text-stone-900">
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {hero.title}
        </h1>

        {hero.subtitle && (
          <p className="mt-6 text-lg text-stone-500 sm:text-xl">
            {hero.subtitle}
          </p>
        )}

        {hero.cta?.label && hero.cta?.url && (
          <a
            href={hero.cta.url}
            className="mt-10 inline-block rounded-md bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            {hero.cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
