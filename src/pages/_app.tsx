import { GroupProvider } from "@/contexts/GroupContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GroupProvider>
      <Component {...pageProps} />;
    </GroupProvider>
  );
}
