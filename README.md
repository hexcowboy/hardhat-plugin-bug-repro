1. Check `hardhat.config.ts` to see plugins are imported at the top:

```ts
...
import "@zerodevapp/mock-server";
import "@zerodevapp/hardhat";
...
```

2. Run `npx hardhat` to see error

```bash
$ npx hardhat
An unexpected error occurred:

Error: Cannot find module '@zerodevapp/mock-server'
...
```

3. See that module is correctly installed in `src/index.ts` when the TypeScript server does not display an import error.
