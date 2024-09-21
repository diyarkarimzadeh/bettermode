import { siteConfig } from '@/config/site';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-6">
      {siteConfig.mainNav.map((item) => (
        <div
          className="cursor-pointer"
          onClick={() => navigate(item.href)}
          key={item.id}
        >
          <p className="font-semibold text-[14px] text-[#7f8ea3]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
