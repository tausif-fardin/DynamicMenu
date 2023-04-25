import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/menu.module.css';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      const res = await fetch('http://localhost:3000/api/menu');
      const data = await res.json();
      console.log(data);
      setMenuData(data.data);
    }
    fetchMenuData();
  }, []);

  return (
    <nav className={`${styles.menu} text-white`}>
      <div className='flex justify-between items-center'>
        <Link href='/' className='font-bold text-lg'>
          Logo
        </Link>
        <div className='flex items-center'>
          <ul>
            {menuData.map((menu) => (
              <li key={menu.id} className='relative md:static'>
                <Link href={menu.url} className='hover:text-gray-300'>
                  {menu.name}
                </Link>
                {menu.submenus && menu.submenus.length > 0 && (
                  <ul className='absolute top-full left-0 mt-2 md:static md:mt-0 md:ml-4'>
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.id}>
                        <Link
                          href={submenu.url}
                          className='block py-2 px-4 hover:bg-gray-200'
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
