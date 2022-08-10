import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Badge from '@mui/material/Badge';

export function Counter() {
  // let like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <IconButton onClick ={()=>{setLike(like+1);}}
        aria-label="Like button" color="primary">
          <Badge badgeContent={like} color="primary">
          👍
        </Badge>
        
      </IconButton>
      <IconButton onClick ={()=>{setDisLike(dislike+1);}}
        aria-label="DisLike button" color="error">
          <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
          
        
      </IconButton>
      {/* <button className="like-style" onClick={() => {
        // like++;
        // console.log(like);
        setLike(like + 1);
      }}>👍{like}</button> */}
      {/* <p>{like}</p> */}
      {/* <button className="like-style" onClick={() => {
        // like++;
        // console.log(like);
        setDisLike(dislike + 1);
      }}>👎{dislike}</button> */}
      <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
    </div>
  );
}
