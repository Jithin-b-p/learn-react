"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const session = useSession();
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 mx-auto">
        <button
          className="bg-slate-900 text-xl font-bold rounded-lg text-white p-2"
          onClick={() => signIn()}
        >
          Signin
        </button>
        <button
          className="bg-slate-900 text-xl font-bold rounded-lg text-white p-2"
          onClick={() => signOut()}
        >
          logout
        </button>
      </div>
      RootPage {JSON.stringify(session)}
    </div>
  );
}
