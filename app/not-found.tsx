import Image from "next/image";

export default function Custom404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/undraw_page_not_found.svg"
        alt="Page Not Found"
        width={300}
        height={300}
      />
    </main>
  );
}