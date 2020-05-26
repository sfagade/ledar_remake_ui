import React, { useState, useEffect} from 'react';

function ForgotPassword() {
  
  useEffect(() => {
    fetchCountries();
  },[])

  const [occupations, setOccuptions] = useState([]);

  const fetchCountries = async () => {
    const data = await fetch('http://localhost:8761/referenceData/api/occupationResource/fetchAllOccupations');
    const occupations = await data.json();

    console.log(occupations);
    setOccuptions(occupations);
  }
  
  return (
      <div>
          <h1>Forgot Password</h1>
          {occupations.map(occupation => (
            <div key={occupation.id}>{occupation.occupationName}</div>            
          ))}
      </div>
  );
}

export default ForgotPassword;