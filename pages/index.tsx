import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <button className="bg-slate-800 py-6 w-40 rounded-lg">
          <a href="/about" className="text-white">
            Product List
          </a>
        </button>
      </div>
    </main>
  );
}
