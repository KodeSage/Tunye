/** @format */

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import WalletProviderCont from "../components/WalletProviderCont";


import { extendTheme } from "@chakra-ui/react";

const colors = {
	background: "#0a0707",
	accent: "#e45314",
	bodyText: "rgba(255, 255, 255, 0.922)",
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<WalletProviderCont>
				<Component {...pageProps} />
			</WalletProviderCont>
		</ChakraProvider>
	);
}

export default MyApp;
