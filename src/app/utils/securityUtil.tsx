const buildAuthToken = (user: any) => {
  const token = btoa(`${user.email}:${user.password}`);
  return `Basic ${token}`;
}

export default buildAuthToken;