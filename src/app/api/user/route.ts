import { NextRequest } from "next/server";

// https://nextjs.org/docs/pages/api-reference/edge
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const queryResult = searchParams.get("search"); //  curl http://localhost:3000/api/user\?search\=hello
  console.log(queryResult);
  console.log("Get request");

  return new Response(JSON.stringify({ name: "John" }), {
    status: 401,
  });
}

export async function POST(req: NextRequest) {
  // to test this code, please use postman
  const body = await req.json();
  console.log("POST request", body);
  return new Response("Ok");
}

export async function DELETE() {
  console.log("DELETE request");
}
