import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/undraw_developer_activity.svg"
        alt="Developer Activity"
        width={300}
        height={300}
      />
    </main>
  );
}
