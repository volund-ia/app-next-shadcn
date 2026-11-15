import { AppWindow } from "lucide-react";

import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

// A tela de partida: o agente troca esta página pelo App que a pessoa pediu.
export default function Inicio() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AppWindow />
          </EmptyMedia>
          <EmptyTitle>O seu aplicativo aparecerá aqui</EmptyTitle>
          <EmptyDescription>Diga na conversa o que ele deve fazer.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </main>
  );
}
