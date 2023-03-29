import ErrorMessage from './ErrorMessage';
const ControlInput = ({type, name, register, validation, errors}) => {
   return (
      <div className="flex  flex-col gap-1 ">
         <label className="text-lg capitalize font-medium " htmlFor={name}>
            {name}
         </label>
         <input
            className="text-base font-medium px-2 py-1 rounded-lg bg-warning text-primary placeholder:text-primary"
            type={type}
            id={name}
            {...register(`${name}`,validation)}
            
            placeholder={name}
         />
           {errors === "required" && <ErrorMessage>enter your blog title</ErrorMessage>}
         {errors === "minLength" && (
            <ErrorMessage>must be 10 character or more</ErrorMessage>
         )}
      </div>
   );
};

export default ControlInput;

