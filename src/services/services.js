export const getEmployees = async () => {
  // const apiKey = "47229404-ef94-435c-a86e-cd185e1fdcea";
  const urlEmpl = `http://ip-api.com/json/?fields=61439`;
  const responseEmpl = await fetch(urlEmpl);
  const data = await responseEmpl.json();
  return data;
}