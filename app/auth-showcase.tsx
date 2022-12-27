'use client';

import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

export const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();

  const { data: threads } = trpc.thread.getThreads.useQuery(
    undefined, // no input
    { enabled: session?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-2xl">
        {session && <pre>Logged in as {session?.user?.name}</pre>}
        {threads && <pre>{JSON.stringify(threads, null, 2)}</pre>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={session ? () => signOut() : () => signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};