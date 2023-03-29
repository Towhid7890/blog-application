
import ErrorMessage from './ErrorMessage';


const PasswordInput = ({ register, errors }) => {
   return (
      <div className="flex  flex-col gap-1 ">
         <label className="text-lg capitalize font-medium " htmlFor="password">
            password
         </label>
         <input
            className="text-base font-medium px-2 py-1 rounded-lg bg-warning text-primary placeholder:text-primary"
            type="password"
            id="password"
            placeholder="password"
            {...register("password", {
               required: true, 
               pattern:{value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/}
            })}
         />
         {
          errors ==="required" && <ErrorMessage>must enter an password </ErrorMessage>
         }
         {
          errors ==="pattern" && <ErrorMessage>password should be valid</ErrorMessage>
         }
         
      </div>
   );
};

export default PasswordInput;
