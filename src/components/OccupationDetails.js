import React, { useState, useEffect} from 'react';

function OccupationDetails({ match }) {
  
    useEffect(() => {
        fetchOccupation();       
      },[])
    
      const [occupation, setOccuption] = useState([]);
    
      const fetchOccupation = async () => {
       const fetchOccupation = await fetch(`http://localhost:8761/referenceData/api/occupationResource/viewOccupation/${match.params.id}`);
       const occupation= await fetchOccupation.json();

       console.log(occupation);
       setOccuption(occupation);
      }
  
    return (
      <div>
          <h1>Occupation Details</h1>
          <div>
              {occupation.occupationName}
          </div>
      </div>
  );
}

export default OccupationDetails;