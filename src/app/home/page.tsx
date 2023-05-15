import React from "react";

export default function Home() {
  async function conosleLog() {
    "use server";
    console.log("hello");
  }

  return (
    <form action={conosleLog}>
      <button>console log</button>
    </form>
  );
}

// Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".
//   <form action={function} children=...>
// check next.config.js
// reference: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
