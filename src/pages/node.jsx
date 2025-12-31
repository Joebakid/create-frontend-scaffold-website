import GoBack from "../components/GoBack";

export default function NodeRequirement() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <GoBack />

      <h2 className="text-2xl font-bold">Node.js Version Requirement</h2>

      <p>
        <strong>create-bawo-frontend</strong> requires{" "}
        <strong>Node.js v20 or newer</strong>.
      </p>

      <p>
        We strongly recommend using the{" "}
        <strong>latest Node.js version</strong> available.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2">Node.js Version</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-medium">20.x+</td>
              <td className="border px-4 py-2">✅ Supported</td>
              <td className="border px-4 py-2 font-semibold">
                Required / Recommended
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Latest Stable</td>
              <td className="border px-4 py-2">✅ Supported</td>
              <td className="border px-4 py-2">Best choice</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">18.x</td>
              <td className="border px-4 py-2">⚠️ Not recommended</td>
              <td className="border px-4 py-2">May cause ESM issues</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">&lt; 18</td>
              <td className="border px-4 py-2">❌ Not supported</td>
              <td className="border px-4 py-2">Will fail</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Why Node.js 20+?</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full ESM support</li>
          <li>Better performance</li>
          <li>Fewer dependency conflicts</li>
          <li>Future-proof compatibility</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Check Your Node Version</h3>
        <pre className="rounded bg-gray-900 p-4 text-sm text-white">
          <code>node -v</code>
        </pre>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Install or Upgrade Node (NVM)</h3>
        <pre className="rounded bg-gray-900 p-4 text-sm text-white">
          <code>{`nvm install 20
nvm use 20
nvm alias default 20`}</code>
        </pre>
      </div>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
        create-bawo-frontend requires Node.js 20 or newer. Always use the latest
        Node.js version for the best experience.
      </blockquote>
    </div>
  );
}
