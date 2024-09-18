import { ArrowUpRight, LucideProps } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  href: string;
  arrow?: boolean;
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

const Button = ({ text, href, arrow, Icon }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate(href)}>
      <div className="flex items-center justify-center bg-[#0168F4] w-auto py-2 px-3 rounded-lg">
        {Icon && <Icon className="mr-2" size={18} />}
        <p className="font-semibold">{text}</p>
        {arrow && <ArrowUpRight size={24} />}
      </div>
    </div>
  );
};

export default Button;
