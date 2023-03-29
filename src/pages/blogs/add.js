import ControlInput from "@/components/ControlInput";
import ImageInput from "@/components/ImageInput";
import { useForm } from 'react-hook-form';
import TextInput from './../../components/TextInput';
import PrimaryButton from './../../components/PrimaryButton';
import { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import { toast } from "react-hot-toast";


const add = () => {
   const    [submissionError, setSubmissionError] = useState(''); 
   const {register, handleSubmit, formState:{errors, isDirty, isValid}} = useForm({
      mode: "onChange"
   });
   const key = process.env.NEXT_PUBLIC_ImageBB;
   
   const onSubmit  = async(data) => {
      setSubmissionError(''); 
      const {title, description, image} = data; 
      
      const formData =new FormData(); 
      formData.append("image",image[0]); 
      try{
         const res =await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
            method:"POST", 
            body:formData
         })
         const imageData = await res.json(); 
         console.log(imageData); 
         if(imageData?.data?.url){
            const blog = {
               title, 
               description, 
               image:   imageData?.data?.url,
               date: new Date().toISOString(), 
               author: "", 
               email:"", 
            }
            console.log(blog); 
            
            const response =await fetch('http://localhost:5000/blogs', {
               method:"POST", 
               headers:{
                  "content-type": "application/json", 
               }, 
               body: JSON.stringify(blog)
            })

            const result = await response.json(); 
            console.log(result);
            if(result.acknowledged){
               toast.success('Successfully toasted!')
            }

         }
      }
      catch(err){
         setSubmissionError(err.message); 
      }
      
   }
   return (
      <div className="flex items-center justify-center h-screen ">
         <form  className="flex flex-col text-start gap-3 bg-primary text-white w-[350px] md:w-[570px] lg:w-3/5 py-10 rounded-lg  px-8"  onSubmit={handleSubmit(onSubmit)}>
            <ControlInput
               type="text"
               name="title"
               register={register}
               validation={{ required: true, minLength: 10 }}
               errors={errors?.title?.type}
            ></ControlInput>
            <TextInput
               name="description"
               errors={errors?.description?.type}
               register={register}
               validation={{required: true, minLength: 300}}
            ></TextInput>
            <ImageInput
               register={register}
               errors={errors}
            ></ImageInput>
            {
               submissionError && <ErrorMessage>{submissionError}</ErrorMessage>
            }
            <PrimaryButton isDirty={isDirty} isValid={isValid}>
                Create Blog
            </PrimaryButton>
         
         </form>
      </div>
   );
};

export default add;
