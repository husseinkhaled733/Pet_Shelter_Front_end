const buildAuthToken = (user: any) => {
  const token = btoa(`${user.name}:${user.password}`);
  return `Basic ${token}`;
}

export default buildAuthToken;