import { useState } from "react";

const Country = ({country , handleVisitedCountry}) => {
    const {name, flags, population, area} = country;
    
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
        handleVisitedCountry( country);
    };

    
    return (
        <div className="flex flex-col  text-left gap-4 m-4 rounded-2xl border-2 border-blue-600 p-4" id={`${visited && 'visited'}`}>
            <h2><strong>Country: {name?.common}</strong></h2>
            <img className="md:w-80 md:h-48 rounded-md" src={flags.png} alt={flags?.alt} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited} className="btn bg-gray-900 rounded-md">{visited ? "Visited" : "Visit"}</button>
        </div>
    );
};

export default Country;