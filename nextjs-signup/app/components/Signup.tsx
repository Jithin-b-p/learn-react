import Button from "./Button";

export default function Signup() {
  return (
    <form className="flex flex-col gap-4 border-2 max-w-[30rem] rounded-md w-full p-10">
      <h1 className="text-3xl text-center font-bold">Sign up</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="border-[1.5px] rounded-md p-2"
          id="email"
          type="text"
          placeholder="example@email.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          className="border-[1.5px] rounded-md p-2"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>

      <Button />
    </form>
  );
}
