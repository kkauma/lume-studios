"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface ProvidersProps {
  children: ReactNode;
  initialSession: Session | null;
}

// Create a client with specific session handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // Don't cache session data
      refetchOnWindowFocus: false,
      retry: false, // Don't retry failed session fetches
    },
  },
});

export function Providers({ children, initialSession }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider
        session={initialSession}
        refetchOnWindowFocus={false}
        refetchInterval={0}
      >
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
