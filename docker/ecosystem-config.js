module.exports = {
  apps: [
    {
      name: 'app1',
      cwd: 'apps/app1',
      script: 'pnpm',
      args: 'next start -p 3001',
    },
    {
      name: 'app2',
      cwd: 'apps/app2',
      script: 'pnpm',
      args: 'next start -p 3002',
    },
    {
      name: 'app3',
      cwd: 'apps/app3',
      script: 'pnpm',
      args: 'next start -p 3003',
    },
    {
      name: 'app4',
      cwd: 'apps/app4',
      script: 'pnpm',
      args: 'next start -p 3004',
    },
  ],
};
