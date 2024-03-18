import { createContext, useEffect, useState } from "react";
import BrandsData from "./brands.json";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {

    const brandsArray = [];
    Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

    const [brands, setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     setBrands(brands)
    // },[])

    useEffect(() => {
        console.log(selectedBrands);
    }, [selectedBrands]);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 500);
        }
    }, [copied]);

    useEffect(() => {
        setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)));
    }, [search])

    const data = {
        brands,
        selectedBrands,
        setSelectedBrands,
        copied,
        setCopied,
        search,
        setSearch
    };

    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
