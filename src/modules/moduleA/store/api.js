export default async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  } catch (error) {
    throw new Error('Unable to get users');
  }
};
