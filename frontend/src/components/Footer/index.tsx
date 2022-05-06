interface FooterProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const Footer = ({ title, subtitle, description }: FooterProps) => {
  return (
    <span className="text-[#a1a1aa] text-xs">
      {title}{" "}
      <span>{subtitle}</span>{" "}
      <a href="https://www.palamarsolutionit.com.br/" className="underline underline-offset-2">{description}</a>{" "}
    </span>
  )
}