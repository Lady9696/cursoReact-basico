import Avatar from "../avatar"
import Detail from "../detail"

const Card =( {name, img, description})=>{
return (
    <div className="flex flex-col bg-pink-400 w-[25%] border-4 border-black h-auto justify-center items-center pt-[14px] px-3" >
        {/*aqui paso el props que definì en el componente avatar */}
        <h2 className="text-[32px] font-UniversExtrablack text-center">{name}</h2>
       <Avatar img={img}/>
       <Detail info={description}/>
       
      
    </div>
)


}

export default Card