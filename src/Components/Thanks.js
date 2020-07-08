import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Thanks = () => {
  const history = useHistory();
  const { name } = useParams();
  
  const goBack = () => {
    history.goBack();
  }

  console.log(history);
  
  return(
    <React.Fragment>
      <button className="back" onClick={goBack}>&larr; Go Back</button>
      <div className="thanks">
        <p>Thanks <strong>{name}</strong> !!</p>
        <p>You joined <strong>{history.location.state}</strong> </p>

        <hr/>
        <p><strong>Disclaimer: </strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam excepturi quam, ab harum consequatur quas! Commodi hic animi mollitia dignissimos iste consectetur ea. Accusantium voluptatem eos doloribus, maxime exercitationem commodi aspernatur debitis, repellat a reprehenderit temporibus tempore eveniet reiciendis laborum.</p>
      </div>
    </React.Fragment>
  );
}

export default Thanks;