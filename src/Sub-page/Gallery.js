import Header from "./Header"

const imglist = [
    {
      "name":"stock-photo","url":"./Image/mountain-view.jpg"
    },
    {
        "name":"blue-sea-sunset","url":"./Image/blue-sea-sunset.jpg"
    },
    {
        "name":"blue-sea-sunset","url":"./Image/image_1.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_2.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_3.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_4.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_5.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_6.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_7.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_8.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_9.jpg"
    },{
        "name":"blue-sea-sunset","url":"./Image/image_10.jpg"
    }

];


export default function Gallery()
{
    return(
        <>
        <Header/>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {imglist.map((img,index)=> 
            (<img style={{width:'15%',margin:'5px',borderRadius:'10%'}} 
        src={img.url} alt={img.name}/>
        
        ))}
        
        
        </div>
        </>
    );
}