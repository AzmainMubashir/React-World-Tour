import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

    }


    return (
        <div>
            <h2 className="py-4 text-2xl font-medium">
            Total Countries: {countries.length}</h2>
            <h3 className="pb-4 text-xl font-medium">Visited Countries: {visitedCountries.length}</h3>
            <div className="text-left w-48 h-32 overflow-y-scroll mx-auto">
            <ul>
                {
                    visitedCountries.map(country => 
                    <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                    countries.map(country => <Country 
                        key={country.ccn3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country} ></Country>)
                }
            </div>
                
        </div>
    );
};

export default Countries;