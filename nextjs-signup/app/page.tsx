import prisma from "@/db";

async function getUser() {
  // const response = await fetch("http://localhost:3000/api/user", {
  //   method: "GET",
  // });
  // const result = await response.json();
  const result = prisma.user.findFirst({});
  return result;
}

export default async function Home() {
  const response = await getUser();

  if (!response) {
    return <main>User not found!</main>;
  }

  return <main>{JSON.stringify(response)}</main>;
}
