import Avatar from "../avatar"
import Detail from "../detail"

const Card =( {name, img, description})=>{
return (
    <div className="flex bg-pink-400" >
        {/*aqui paso el props que definì en el componente avatar */}
        <h2 className="text-[80px]">{name}</h2>
       <Avatar img={img}/>
       <Detail info={description}/>
       
      
    </div>
)


}

export default Card