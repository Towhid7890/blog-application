import ErrorMessage from "./ErrorMessage";

const EmailInput = ({ register, errors }) => {
   return (
      <div className="flex  flex-col gap-1 ">
         <label className="text-lg capitalize font-medium " htmlFor="email">
            email
         </label>
         <input
            className="text-base font-medium px-2 py-1 rounded-lg bg-warning text-primary placeholder:text-primary"
            type="email"
            id="email"
            placeholder="email"
            {...register("email", {
               required: true,
               pattern: {
                  value: /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/,
               },
            })}
         />
         {errors === "required" && (
            <ErrorMessage>must enter your email</ErrorMessage>
         )}
         {errors === "pattern" && (
            <ErrorMessage>enter a valid email</ErrorMessage>
         )}
      </div>
   );
};

export default EmailInput;
