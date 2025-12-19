import { useState } from "react";

const RECEIVER_ADDRESS = "0x068f3f5c278933678b641b65c5c8223caf0167a6";

const SUPPORTED_NETWORKS = {
  1: "Ethereum",
  8453: "Base",
};

export default function Support() {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [network, setNetwork] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install an Ethereum wallet like MetaMask.");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    setAccount(accounts[0]);
    setNetwork(SUPPORTED_NETWORKS[parseInt(chainId, 16)] || "Unsupported");
  }

  async function contribute(value) {
    try {
      setLoading(true);

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: RECEIVER_ADDRESS,
            value: `0x${(Number(value) * 1e18).toString(16)}`,
          },
        ],
      });

      alert("Thank you for supporting ❤️");
      setAmount("");
    } catch {
      alert("Transaction cancelled or failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold uppercase">
        Support the Project
      </h1>

      <p className="mt-4 text-gray-600">
       Everyone is an artist until it’s time to pay the bills.

create-bawo-frontend is built and maintained independently, driven purely by passion for open-source and developer experience. I genuinely want to invest more time, features, and long-term support into this project.

However, like many independent builders, I’m constrained by basic realities rent, food, internet, and daily living costs. These needs limit how much time I can sustainably dedicate without financial support.

If this project has helped you, inspired you, or saved you time, any form of support, contributions, sponsorships, or paid collaborations  directly helps keep it alive and improving.

Open source survives on people, not just code.
      </p>

      {/* MAIN SUPPORT BOX */}
      <div className="mt-4   rounded-xl px-5 py-3 space-y-6">
        {!account ? (
          <button
            onClick={connectWallet}
            className="w-full py-3 bg-black text-white rounded-lg text-sm"
          >
            Connect Ethereum Wallet
          </button>
        ) : (
          <>
            {/* INFO */}
            <div className="text-sm text-gray-500">
              Connected:{" "}
              <span className="font-mono text-gray-800">
                {account.slice(0, 6)}…{account.slice(-4)}
              </span>{" "}
              · {network}
            </div>

            {/* QUICK AMOUNTS */}
            <div>
              <p className="text-sm font-medium mb-2">
                Quick support
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[0.01, 0.05, 0.1].map((val) => (
                  <button
                    key={val}
                    onClick={() => contribute(val)}
                    disabled={loading}
                    className="border rounded-lg py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
                  >
                    {val} ETH
                  </button>
                ))}
              </div>
            </div>

            {/* CUSTOM */}
            <div className="pt-4 border-t space-y-3">
              <p className="text-sm text-gray-500">
                Or send a custom amount
              </p>

              <div className="flex gap-3">
                <input
                  type="number"
                  step="0.001"
                  placeholder="ETH amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />

                <button
                  onClick={() => contribute(amount)}
                  disabled={!amount || loading}
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm disabled:opacity-40"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* FOOTNOTE */}
      <p className="mt-6 text-sm text-gray-500">
        Contributions are optional and do not grant ownership or privileges.
        Supported networks: Ethereum & Base or any on the evm network.
      </p>
    </section>
  );
}
