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
