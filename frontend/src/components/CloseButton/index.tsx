import { X } from "phosphor-react";
import { Popover } from "@headlessui/react";

export const CloseButton = () => {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4"/>
    </Popover.Button>
  )
}