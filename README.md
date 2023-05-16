# NextJS 13 App Route

This app is a guide repo for app router in next.js 13

- Routing
- Server component (by default)
- Loading, error handling (create loading.tsx)
- Rendering for optimized page speeds
- SEO (sitemap.ts)
- API route handler

## Notice

component in next13 is server component by default. When you want to use client component write `use client` on the top of file

## Server component vs client component

What do you need to do for server component and client component ?

Server component

- fetch data
- Access backend resources (directly)
- Keep sensitive information on the server (access tokens, API keys, etc)
- Keep large dependencies on the server / Reduce client-side JavaScript

Client component

- Add interactivity and event listeners
- Use State and Lifecycle Effect
- Use browser-only APIs
- Use custom hooks that depend on stat,effects or browers-only APIs
- Use react class component

## page.tsx

Till Next12 index.tsx is a entry file. From Next13 page.tsx is entry file

## layout.tsx

Any subfolder should path through layout.tsx in root level. Also create layout inside of subfolder to set a sepcifc layout setting only for this subfolder.

## Rendering for optimization 

Please check out dashbard.tsx. You can find out different code base in there. 

```tsx
// build-1
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
   return <div>page</div>;
 };

export default page;
```

![build-1](https://github.com/deutschkihun/app-router-next13/assets/45092135/5f6b92b1-a8db-40db-a79b-c0dac1e4535e)

As you can see here dashboard is generated in static (SSG), and it means buid-time generated


```tsx
// build-2
const page = async ({}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
  // This code is same as getServerSideProps in NextJS 12
};

export default page;
```
![build-2](https://github.com/deutschkihun/app-router-next13/assets/45092135/c44328f9-3e27-4703-9fdc-c8919a7c6ec3)


But here you can see that dashboard is generated dynamically. It's because of fetching with no-cache option. Dynamic generation means that page is created in runtime, not in build time

NextJS 13 provides ISR (Incremental static regeneration and ISR is static

```tsx
// build-3
const page = async ({}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 1 },
  });

  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
```

![build-3](https://github.com/deutschkihun/app-router-next13/assets/45092135/b8d18572-d633-4607-8108-12d607652613)

But in production level. We don't use fetch api. Normally we use axios. But axios doesn't provide revalidate or cache option. But Next13 is smarter than we think. NextJS 13 provides constant option. we can set `force-dynamic` to create this page dynamically


```tsx
// build-4
import axios from "axios";

export const dynamic = "force-dynamic";

const page = async ({}) => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts/1");

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
```
![build-4](https://github.com/deutschkihun/app-router-next13/assets/45092135/0c128a43-8e99-4824-a6d7-6a38c099e557)


