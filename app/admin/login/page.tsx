"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white border-4 border-white p-8 relative">
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#2D2DC3] -z-10"></div>
          
          <h1 className="text-3xl font-bold text-black mb-2">Admin Login</h1>
          <p className="text-gray-600 mb-8">
            Sign in to manage blog posts
          </p>

          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-[#2D2DC3]"
                required
                disabled={loading}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-black mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-[#2D2DC3]"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-lg font-bold text-white bg-[#2D2DC3] border-2 border-black hover:bg-[#2525a5] transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}