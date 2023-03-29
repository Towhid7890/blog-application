import ControlInput from "@/components/ControlInput";
import ImageInput from "@/components/ImageInput";
import { useForm } from 'react-hook-form';
import TextInput from './../../components/TextInput';
import PrimaryButton from './../../components/PrimaryButton';

const add = () => {
   const {register, handleSubmit, formState:{errors, isDirty, isValid}} = useForm({
      mode: "onChange"
   });
   const onSubmit  = (data) => {
      console.log(data); 
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
            <PrimaryButton isDirty={isDirty} isValid={isValid}>
                Create Blog
            </PrimaryButton>
         </form>
      </div>
   );
};

export default add;
