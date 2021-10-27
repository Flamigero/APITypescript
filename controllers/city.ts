import { Request, Response } from "express";
import City from "../models/city";

// Get cities with pagination
const getCities = async (req: Request, res: Response) => {
    const {limit=5, from=0} = req.query;

    try {
        const cities = await City.findAll({
            limit: Number(limit),
            offset: Number(from)
        });
        

        res.json({
            total: cities.length,
            cities
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to an admin'
        });
    }
}

const getCity = async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const city = await City.findByPk(id);
        res.json(city);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to an admin'
        });
    }
}

const createCity = async (req: Request, res: Response) => {
    const {city} = req.body;
    
    try {
        const cityDB = await City.findOne({
            where: {city}
        });
        
        if(cityDB) {
            return res.status(400).json({
                msg: 'City already exist'
            })
        }

        const cityCreate = await City.create({
            city
        })

        res.status(201).json({
            city: cityCreate
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to an admin'
        });
    }
}

export {
    getCities,
    getCity,
    createCity
}