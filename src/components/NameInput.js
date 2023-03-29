import ErrorMessage from "./ErrorMessage";

const NameInput = ({ register, errors }) => {
   return (
      <div className="flex  flex-col gap-1 ">
         <label className="text-lg capitalize font-medium " htmlFor="name">
            name:
         </label>
         <input
            className="text-base font-medium px-2 py-1 rounded-lg bg-warning text-primary placeholder:text-primary"
            type="text"
            id="name"
            placeholder="name"
            {...register("name", { required: true, minLength: 5 })}
         />
         {errors === "required" && <ErrorMessage>enter you name</ErrorMessage>}
         {errors === "minLength" && (
            <ErrorMessage>must be 5 character or more</ErrorMessage>
         )}
      </div>
   );
};

export default NameInput;
