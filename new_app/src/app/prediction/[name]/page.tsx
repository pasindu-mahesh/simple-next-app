const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.oi/?name=${name}`);
    return res.json();
};

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.agify.oi/?name=${name}`);
    return res.json();
};

const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.agify.oi/?name=${name}`);
    return res.json();
};


import { Params } from "next/dist/server/request/params";

interface params{
    params: {name: string};
}

export default async function page({params}: params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([
        ageData, 
        genderData, 
        countryData
    ]);
    return(
        <div>
            <div>
                <div> Personal Info </div>
                <div> Age: {age?.age}</div>
                <div> Gender: {gender?.gender}</div>
                <div> Country: {country?.country[0]?.country_id}</div>
            </div>
        </div>
    );
}