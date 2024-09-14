import { ArrowUpRight, LucideProps } from 'lucide-react';

interface ButtonProps {
  text: string;
  href?: string;
  target?: string;
  arrow?: boolean;
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

const Button = ({ text, href, target, arrow, Icon }: ButtonProps) => {
  return (
    <a href={href} target={target}>
      <div className="flex items-center justify-center bg-[#0168F4] w-auto py-2 px-3 rounded-lg">
        {Icon && <Icon className="mr-2" size={18} />}
        <p className="font-semibold">{text}</p>
        {arrow && <ArrowUpRight size={24} />}
      </div>
    </a>
  );
};

export default Button;
