import { Conversor } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-5xl font-bold">Conversor</h1>

      <Conversor />
    </main>
  );
}
