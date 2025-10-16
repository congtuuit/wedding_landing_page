import Hero from '@/components/Hero';
import LoveStory from '@/components/LoveStory';
import EventDetails from '@/components/EventDetails';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import ThankYou from '@/components/ThankYou';

// Import the content data
import contentData from '@/data/content.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero data={contentData.hero} />
      <LoveStory data={contentData.loveStory} />
      <EventDetails data={contentData.eventDetails} />
      <Countdown data={contentData.countdown} />
      <Gallery data={contentData.gallery} />
      <RSVP data={contentData.rsvp} />
      <ThankYou data={contentData.thankYou} />
    </main>
  );
}