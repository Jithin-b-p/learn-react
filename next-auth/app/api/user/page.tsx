import { NEXT_AUTH_OPTION } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

export default async function User() {
  const session = await getServerSession(NEXT_AUTH_OPTION);

  return <div>{JSON.stringify(session)}</div>;
}
