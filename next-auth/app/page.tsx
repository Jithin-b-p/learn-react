"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const session = useSession();
  return <div>RootPage {JSON.stringify(session)}</div>;
}
