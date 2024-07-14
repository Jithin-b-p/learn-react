"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

const initialFormData = {
  email: "",
  password: "",
};

export default function Signin() {
  const [data, setData] = useState<FormData>(initialFormData);
  const router = useRouter();

  const formSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { email: data.email, password: data.password });
  };

  const handleOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={formSubmit}
        className="flex flex-col gap-4 border-2 max-w-[30rem] rounded-md w-full p-10"
      >
        <h1 className="text-3xl text-center font-bold">Sign in</h1>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border-[1.5px] rounded-md p-2"
            id="email"
            type="text"
            name="email"
            value={data.email}
            placeholder="example@email.com"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border-[1.5px] rounded-md p-2"
            id="password"
            type="password"
            placeholder="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
          />
        </div>
        <Button />

        <span className="text-neutral-700 mx-auto">OR</span>
        <button
          type="button"
          className="bg-blue-700 text-white p-2 rounded-md font-bold"
          onClick={async () => signIn("google")}
        >
          Sign in with Google
        </button>
      </form>
    </>
  );
}
