

import Image from "next/image";
import  Link  from "next/link";

 const Page = async () => {

const data = await fetch ('https://api.imgflip.com/get_memes')
const response = await data.json();
const responseData = response.data.memes;  // یہی حصہ شامل کیا گیا ہے
  console.log(responseData);
// console.log(response.data.memes);



  return (
    <div>
    {responseData && responseData.map  ((item: any) =>(
<div key ={item.id}>
  <Image src ={item.url} width={200} height={200} alt={item.name}/>
  <Link href={{
    pathname:'singlememe',
    query:{
      id:item.id
    }
  }}> <button>GENERATEMEME</button></Link>




  
</div>

 ))}
    



    </div>
    
  );
}

export default Page