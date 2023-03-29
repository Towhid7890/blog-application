import ErrorMessage from './ErrorMessage';
const TextInput = ({ name, register, validation, errors }) => {
   return (
      <div>
         <label className="text-lg capitalize font-medium " htmlFor={name}>
            {name}
         </label>
         <textarea
            className="text-base font-medium px-2 py-1 rounded-lg bg-warning text-primary placeholder:text-primary w-full"
            cols={10}
            rows={5}
            id={name}
            {...register(`${name}`, validation)}
            placeholder={name}
         ></textarea>
           {errors === "required" && <ErrorMessage>enter you description</ErrorMessage>}
         {errors === "minLength" && (
            <ErrorMessage>must be 500 character or more</ErrorMessage>
         )}
      </div>
   );
};

export default TextInput;
