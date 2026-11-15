# App modelo: Next.js + shadcn/ui

O ponto de partida dos Apps da Volund e da Beyond.
A plataforma clona este repositório no App novo e instala as dependências.

- Next.js com TypeScript, Tailwind e ESLint.
- shadcn/ui configurado, com todos os componentes em `components/ui`.
- `.volund/dev`: o comando que a Prévia roda (`PORT` e `0.0.0.0`).
- `next.config.ts` libera o host de `APP_URL` no servidor de desenvolvimento.

Para atualizar: gere de novo com o comando abaixo numa pasta vazia, mantenha `.volund/dev`, o `next.config.ts` e este README, e faça o commit.

```bash
npx --yes create-next-app@latest . --yes && npx --yes shadcn@latest init --yes --defaults && npx --yes shadcn@latest add --all --yes
```
