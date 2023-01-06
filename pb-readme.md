## Base of this repository

Setup a monorepo with PNPM workspaces and add Nx for speed
https://www.youtube.com/watch?v=ngdoUQBvAjo

Setup a Monorepo with PNPM workspaces and speed it up with Nx!
https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e

## Changes to these excellent blog post from Juri Strumpflohner

### packages/shared-ui/BaseElements.tsx

    Must have -> Instead using a default export, all lib members have its own export


### packages/shared-ui/package.json

    Nice to have -> Changed the name to "@purebase/shared-ui" (purebase is my domain :-) 

## apps/next-portfolio/app/routes/index.tsx 

    Better imports -> import {Button, Headline} from "@purebase/shared-ui";

## Using NextJS instead Remix to enable usage of tinaCMS

    Instead of using the new "Remix", I'll stick with "NextJS" because I need it for tinacms - Remix may be faster, but NextJS is established on the market...


## The main scripts

pnpm run --filter shared-ui build

pnpm i --filter next-portfolio
pnpm run --filter next-portfolio dev

