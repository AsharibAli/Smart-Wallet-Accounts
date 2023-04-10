import Head from "next/head";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Social Login | Web3 Assignment</title>
        <meta name="description" content="panaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#030413] opacity-90">
        <div className="bg bg-no-repeat bg-cover bg-center">
          <div className="px-4 lg:px-0 mx-auto max-w-[1080px] flex justify-center flex-col min-h-[100vh]">
            <div className="flex justify-center flex-row">
              <div className="flex flex-col justify-between text-center h-[100vh] py-10 md:py-32">
                <Image
                  src="/panaverse.png"
                  width={100}
                  height={100}
                  className="mx-auto animate__animated animate__zoomIn"
                  alt="panaverse-logo"
                />
                <h1 className="text-4xl sm:text-5xl mt-[-3rem] font-extrabold text-[#E4E4ED] animate__animated animate__zoomIn">
                  Panaverse | AA Assignment
                </h1>
                <div className="text-4xl tracking-tight font-extrabold text-[#E4E4ED] sm:text-5xl md:text-7xl lg:px-32 space-y-5">
                  <h2 className="animate__animated animate__slideInRight">
                    Unleash the real power
                  </h2>
                  <h2 className="animate__animated animate__slideInLeft">
                    of Web3 with Smart Account
                  </h2>
                  <h3 className="block text-[#AEACC9] font-medium text-2xl lg:px-32 animate__animated animate__slideInRight">
                    ERC-4337 is an Ethereum standard that achieves account
                    abstraction on the protocol without any consensus-layer
                    changes.
                  </h3>
                </div>
                <div className="animate__animated animate__pulse">
                  <a
                    href="https://account-abstraction-zeta.vercel.app/"
                    className="px-10 py-3 border-0 border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#a13bf7] via-[#008dff] to-[#00bdff] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:py-4 md:text-lg"
                  >
                    Connect Smart Wallet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
