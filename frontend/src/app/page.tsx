import ParticlesWrapper from "@/components/common/Particles";
import Demo from "@/components/home/Demo";
import Detections from "@/components/home/Detections";
import Greetings from "@/components/home/Greetings";
import Instructions from "@/components/home/Instructions";

export default async function Home() {
  return (
    <main className="h-screen overflow-y-auto p-6 grid grid-cols-1 place-items-center">
      <div className="absolute">
        <ParticlesWrapper />
      </div>

      <Greetings />
      <Demo />
      <Instructions />
      <Detections />
    </main>
  );
}
