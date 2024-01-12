# Reef Chain Monorepo
  <a alt="Reef Logo" href="https://reef.io" target="_blank" rel="noreferrer">
    <img src="https://github.com/anukulpandey/reef-chain-monorepo/assets/62092256/e4e0f68a-3728-49ca-82d3-03eacfc30318" width="45" alt="Reef Logo">
  </a>

## Current Structure of Monorepo
- `@reef-chain` _(monorepo)_
  - `apps`
    - `new-reef-app`
    - `ui-kit-fe`
  - `libs`
    - `ui-kit`
    - `util-lib`
   
## Run App

To run frontend apps like ui-kit-fe

```bash
nx run ui-kit-fe:serve
```

All the changes which you do in /libs/ui-kit will be instantly reflected here

## Build Library

To build packages or libraries run 

```bash
cd libs/<package_name>
yarn 
nx run <package_name>:build
```
