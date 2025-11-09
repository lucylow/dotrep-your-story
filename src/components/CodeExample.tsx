export const CodeExample = () => {
  const codeSnippet = `// Sign a contribution proof with Polkadot wallet
import { web3FromSource } from '@polkadot/extension-dapp';
import { u8aToHex, stringToU8a } from '@polkadot/util';

const contribution = {
  repo: "polkadot-js/api",
  commit: "abc123",
  timestamp: Date.now(),
  developer: account.address
};

// Get injector and sign the proof
const injector = await web3FromSource(account.meta.source);
const signRaw = injector.signer.signRaw;

const { signature } = await signRaw({
  address: account.address,
  data: u8aToHex(stringToU8a(JSON.stringify(contribution))),
  type: 'bytes'
});

// Anchor to Polkadot Cloud DA
await anchorToPolkadotCloud(contribution, signature);`;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sign once,{" "}
              <span className="gradient-accent bg-clip-text text-transparent">verify everywhere</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Cryptographically sign your contributions with your Polkadot wallet and create immutable proofs anchored on-chain.
            </p>
            <ul className="space-y-4">
              {[
                "Wallet-signed contribution proofs using Polkadot.js",
                "Anchored to Polkadot Cloud DA for censorship resistance",
                "Query reputation across parachains via XCM",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-2xl rounded-2xl" />
            <pre className="relative bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <code className="text-sm text-foreground font-mono leading-relaxed">{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
