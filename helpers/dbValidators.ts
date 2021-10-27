import City from "../models/city"

const cityExist = async (id: number) => {
    const city = await City.findByPk(id);
    if(!city) throw new Error("City don't exist");
}

export {
    cityExist
}