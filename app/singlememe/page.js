"use client"
import Image from 'next/image';
import Input from "postcss/lib/input";
import { useRef,useState } from "react";




 

 const singleMeme= async (searchParam)=>{
    const{id}=searchParam.searchParams;
    console.log(id);
    




    
 let inputValue1 =useRef(null)
 let inputValue2 =useRef(null)
 let [memeDataResult,setMemeDataResult] = useState('');



    // async function generateMeme(event){
    //     event.preventDefault();

    const generateMeme = async (event) => {
        event.preventDefault();
        const memeData = await fetch (`https://api.imgflip.com/caption_image?template_id=${id}&username=huzaifafurqan28&password=huzaifa78&text0=${inputValue1.current.value}&text1=${inputValue2.current.value}&gt`)

    // const memeData= await fetch (`https://api.imgflip.com/caption_image?template_id=${id}&username=anusbhai&password=anus1234&text0=${inputValue1.current.value}&text1=${inputValue2.current.value}&gt`)
    const memeDataFetched =await memeData. json();
    console.log(memeDataFetched);
    setMemeDataResult(memeDataFetched.data.url);
    console.log(memeDataResult);
    }
    return (
        <>
        <form>
            
 <input type="text" placeholder="text one" ref={inputValue1} />


<input type="text" placeholder="text two" ref={inputValue2} />

            <button onClick={generateMeme}>Generate Meme</button>
        </form>
        {memeDataResult !== "" ? (
            <div>
              
              <Image src={memeDataResult} width={200} height={200} alt='generated-meme' />
              </div>
    ) : null}
    </>
    );
};



export default singleMeme






















































































































































































































// "use client"
// import Image from 'next/image';

// import React, { useRef ,useState} from 'react'

// const SingleMemePage = (searchParam) => {
//   const {id} = searchParam.searchParams;
//   console.log(id);
//    let [memeDataResult,setMemeDataResult] = useState('');

//  let inputValue1 = useRef();
//  let inputValue2 = useRef();


//    async function generateMeme(event){
//     event.preventDefault();
//     const memeData = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=huzaifafurqan28&password=huzaifa78&text0=${inputValue1.current.value}&text1=${inputValue2.current.value}&gt`);
//     const memeDataFetched = await memeData.json();
//     console.log(memeDataFetched);
//     // memeDataResult = memeDataFetched.data;
//     // Use setMemeDataResult to update the state with the meme URL
//     setMemeDataResult(memeDataFetched.data.url);
//     console.log(memeDataResult);
//   }

  


//   return (
//     <>
//     <h1 className='text-3xl  text-center'>This is a single meme page.</h1>
//   <form className='flex flex-col gap-1 mt-5 border-black border-[1px] rounded-md mx-auto justify-center items-center w-[500px]'>
//     {/* Input One */}
//     <label className="input input-bordered flex items-center gap-2">
//   <input type="text" className=" w-full" placeholder="text one" ref={inputValue1}/>
// </label>
// {/* Input Two */}
// <label className="input input-bordered flex items-center gap-2">
  
//   <input type="text" className=" w-full" placeholder="text-two"  ref={inputValue2}/>
// </label>
// <button className="border-[1px] mx-auto" onClick={generateMeme}>Generate Meme</button>
//   </form>
//   {memeDataResult !== "" ? (
//       <div>
        
//         <Image src={memeDataResult} width={200} height={200} alt='generated-meme' />
//       </div>
//     ) : null}

//     </>
//   )
// }

// export default SingleMemePage