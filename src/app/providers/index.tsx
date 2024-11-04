import Privy from "./privy-provider";
import WagmiConfig from "./wagmi-provider";
import TanstackProvider from "./tanstack-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Privy>
      <TanstackProvider>
        <WagmiConfig>{children}</WagmiConfig>
      </TanstackProvider>
    </Privy>
  );
}
