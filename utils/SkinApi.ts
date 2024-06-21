export const getSkin = async (name: string) => {
  const { data } = await useFetch(
    `https://mineskin.eu/armor/body/${name}/100.png`,
    {
    	method: "GET"
    },
  );
  return data.value;
}