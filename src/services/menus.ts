export async function getMenus() {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/menus` 
  );

  if (!res.ok) {
    throw new Error("Erro ao carregar menus");
  }

  return res.json();
}
