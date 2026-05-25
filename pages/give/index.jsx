import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="bg-gray-900 min-h-screen flex flex-col items-center pt-24">
			<h1 className="text-center px-4 text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-primary-300 via-primary-400 to-primary-200 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] tracking-tight mb-6">
					Support Us - Stock Analyzer
			</h1>
			<Head>
        <title>Support Us – Stock Analyzer</title>
      </Head>
      <div className="min-h-screen bg-[#021222] text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Support Stock Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-lg text-center">
          If you find this site useful and would like to support its development and hosting costs, consider donating. Every bit helps and is greatly appreciated.
        </p>
        <a
          href="https://www.paypal.com/paypalme/dyk010518" // 🔁 Replace this with your actual PayPal.me or donation link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Donate via PayPal
        </a>
        <Link href="/" className="mt-6 text-sm text-gray-400 hover:text-teal-400 transition">
          ← Back to Home
        </Link>
      </div>
		</main>
	)
}