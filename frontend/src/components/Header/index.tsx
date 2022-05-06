import { CloseButton } from "../CloseButton";

interface HeaderProps {
  title: string;
  src?: string;
  alt?: string;
}

export const Header = ({ title, src, alt }: HeaderProps) => {
  return (
    <header className="flex items-center gap-2">           
      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={src} alt={alt} />
        {title}
      </span>
      <CloseButton />
    </header>
  )
}