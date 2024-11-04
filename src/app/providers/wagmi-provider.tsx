"use client";

import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { polygonAmoy } from "wagmi/chains";
import { http } from "viem";

const config = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

export default function WagmiConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
