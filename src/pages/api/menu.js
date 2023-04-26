import connection from '@/utils/db';

export default async function handler(req, res) {
  const query = `
    SELECT menus.id as menu_id, menus.name as menu_name, menus.url as menu_url,
      submenus.id as submenu_id, submenus.name as submenu_name, submenus.url as submenu_url
    FROM menus
    LEFT JOIN submenus ON menus.id = submenus.menuid
    ORDER BY menus.id, submenus.id
  `;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ msg: 'Error occurred while retrieving data from database' });
    }

    const menus = [];
    let currentMenu = null;

    for (const row of results) {
      const {
        menu_id,
        menu_name,
        menu_url,
        submenu_id,
        submenu_name,
        submenu_url,
      } = row;

      if (!currentMenu || menu_id !== currentMenu.id) {
        currentMenu = {
          id: menu_id,
          name: menu_name,
          url: menu_url,
          submenus: [],
        };
        menus.push(currentMenu);
      }

      if (submenu_id) {
        currentMenu.submenus.push({
          id: submenu_id,
          name: submenu_name,
          url: submenu_url,
        });
      }
    }

    return res.status(200).json({ data: menus });
  });
}
