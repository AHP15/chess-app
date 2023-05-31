export const request = async (options: { method: string, body: any}, route='') => {
  const res = await fetch(`http://localhost:8080/${route}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return { status: res.status, data };
};