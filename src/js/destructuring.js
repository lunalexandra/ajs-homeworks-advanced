
export default function showAttack({ special }) {
  const result = [];
  special.forEach(({ id, name, icon, description = 'Описание недоступно' }) => {
      result.push({ id, name, icon, description });
  });
  return result;
}