'use client';

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { getBaseUrl, trpc } from '../utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';

export const Providers = ({
    children,
}: {
    children: ReactNode,
}) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }),
    );


    return (
        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}
        >
            <QueryClientProvider
                client={queryClient}
            >
                <SessionProvider>
                    {children}
                </SessionProvider>
            </QueryClientProvider>
        </trpc.Provider>
    )
}
