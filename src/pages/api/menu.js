import connection from '@/utils/db';

export default async function handler(req, res) {
  const query = `
    SELECT menus.id as menu_id, menus.name as menu_name, menus.url as menu_url,
      submenus.id as submenu_id, submenus.name as submenu_name, submenus.url as submenu_url
    FROM menus
    LEFT JOIN submenus ON menus.id = submenus.menuid
    ORDER BY menus.id, submenus.id
  `;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error occurred while fetching' });
    } else {
      const menus = [];
      let currentMenu = null;
      for (const row of results) {
        if (row.menu_id !== currentMenu?.id) {
          currentMenu = {
            id: row.menu_id,
            name: row.menu_name,
            url: row.menu_url,
            submenus: [],
          };
          menus.push(currentMenu);
        }
        if (row.submenu_id) {
          currentMenu.submenus.push({
            id: row.submenu_id,
            name: row.submenu_name,
            url: row.submenu_url,
          });
        }
      }
      res.status(200).json({ data: menus });
    }
  });
}
