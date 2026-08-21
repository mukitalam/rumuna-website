import { login } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const errorMsg = params.error;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b192e] px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1d4ed8]">
            RUMUNA Executive Portal
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#0f172a]">
            CMS Sign In
          </h1>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Authorized administrator credentials required for website content management.
          </p>
        </div>

        {errorMsg && (
          <div
            role="alert"
            className="mt-6 rounded border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700"
          >
            {errorMsg}
          </div>
        )}

        <form action={login} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="text-xs font-bold uppercase tracking-wider text-[#0f172a]"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="admin@rumuna.org"
              className="mt-1.5 min-h-11 w-full rounded border border-slate-300 px-4 py-2.5 text-sm text-[#0f172a] outline-none transition focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-xs font-bold uppercase tracking-wider text-[#0f172a]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Enter password"
              className="mt-1.5 min-h-11 w-full rounded border border-slate-300 px-4 py-2.5 text-sm text-[#0f172a] outline-none transition focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20"
            />
          </div>

          <button
            type="submit"
            className="min-h-11 w-full rounded bg-[#1d4ed8] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#1e40af]"
          >
            Sign In to CMS
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-slate-400">
          Protected System · Rajshahi University Model United Nations Association
        </p>
      </div>
    </main>
  );
}