import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import PrimaryButton from "@/components/PrimaryButton"; 
import styles from "../../styles/Register.module.css"; 

import { useForm } from "react-hook-form";


const Login = () => {
   const {register, handleSubmit, formState:{errors, isDirty, isValid}} = useForm({
      mode: "onChange"
   });
   const onSubmit  = (data) => {
      console.log(data); 
   }
   return (
      <div>
          <div className={`flex items-center justify-center h-screen ${styles.registerPage}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-start gap-3 bg-primary text-white w-[350px] py-10 rounded-lg  px-8">
               <EmailInput register={register} errors={errors?.email?.type}></EmailInput>
               <PasswordInput register={register} errors={errors?.password?.type}></PasswordInput>
               <PrimaryButton isDirty={isDirty} isValid={isValid} >Button</PrimaryButton>  
            </form>
         </div>
      </div>
   );
}

export default Login;