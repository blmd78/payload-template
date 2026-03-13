import { getPayload } from 'payload';
import config from '@payload-config';
import { Navbar } from '@/components/navbar';
import { HeroSection, type HeroData } from '@/components/hero-section';
import { AboutSection, type AboutData } from '@/components/about-section';
import { StatsSection, type StatsData } from '@/components/stats-section';
import { LivePreviewListener } from '@/components/live-preview-listener';

export default async function HomePage() {
  const payload = await getPayload({ config });
  const [hero, about, stats] = await Promise.all([
    payload.findGlobal({ slug: 'hero' }) as Promise<HeroData>,
    payload.findGlobal({ slug: 'about' }) as Promise<AboutData>,
    payload.findGlobal({ slug: 'stats' }) as Promise<StatsData>,
  ]);

  return (
    <>
      <LivePreviewListener />
      <Navbar />
      <main>
        <HeroSection hero={hero} />
        <AboutSection about={about} />
        <StatsSection stats={stats} />
      </main>
    </>
  );
}
