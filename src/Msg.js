import{Counter} from "./Counter"

export function Msg(name,pic) {
  // console.log(abc);
  return (
    <div>
      <h1>Helloo {name}</h1>
      <img className="profile-pic" src={pic} alt={name} />
    </div>
  );
}
