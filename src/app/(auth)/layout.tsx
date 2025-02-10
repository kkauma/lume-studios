import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="group flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="flex items-center">
            <span className="text-xl font-bold">Lume Studios</span>
          </div>
        </Link>
      </div>

      {children}
    </div>
  );
}
