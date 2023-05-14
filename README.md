# NextJS 13 App Route

This app is a guide repo for app router in next.js 13

- Routing
- Server componenet
- Loading, error handling
- Rendering for optimized page speeds
- SEO
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
