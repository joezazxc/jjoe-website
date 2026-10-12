import DeveloperActivity from '@/public/undraw_developer_activity.svg';
import DitherVeil from '@/app/components/DitherVeil';


export default function Home() {
  return (
    <main className="h-dvh w-full">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <DitherVeil
          src="./hero.png"
          fit="cover"
          pattern="floyd"
          pixelSize={2}
          inkColor="#120f17"
          paperColor="#f4f1ea"
          revealRadius={200}
          softness={0.6}
          linger={1}
        />
      </div>
    </main>
  );
}
