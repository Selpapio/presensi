import React from "react";
import { client } from "../utils/axiosClient";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    try {
      const res = (await client.post("/api/login", data)).data;
      alert(res.message);
      localStorage.setItem("token", res.token);
      location.replace("/admin");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-grey flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl drop-shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Login Admin
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <section className="flex space-x-3">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-lg py-5 px-8"
            >
              Login
            </Button>
            <Link to="/">
              <Button
                type="submit"
                variant={"outline"}
                className="text-lg py-5 px-8"
              >
                Kembali
              </Button>
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
}
