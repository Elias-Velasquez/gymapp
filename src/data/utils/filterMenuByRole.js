// utils/filterMenuByRole.js
export function filterMenuByRole(menuData, role) {

  return menuData
    .map(item => {
      // Si el item tiene hijos, filtrarlos primero
      if (item.children) {
        const filteredChildren = filterMenuByRole(item.children, role);
        return { ...item, children: filteredChildren };
      }
      return { ...item };
    })
    .filter(item => {
      // Si no tiene roles definidos, se muestra para todos
      if (!item.roles) return true;

      // Si tiene roles, debe incluir el actual
      return item.roles.includes(role);
    })
    .filter(item => {
      // Si es un submenu, asegurarse de que tenga hijos válidos
      if (item.type === 'sub' && item.children && item.children.length === 0) {
        return false;
      }
      return true;
    });
}
