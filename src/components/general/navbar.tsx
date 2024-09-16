import { siteConfig } from '@/config/site';

const Navbar = () => {
  return (
    <div className="flex flex-row gap-6">
      {siteConfig.mainNav.map((item) => (
        <a key={item.id} href={item.href}>
          <p className="font-semibold text-[14px] text-[#7f8ea3]">
            {item.title}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
