import { RiImageAddFill } from "react-icons/ri";
import styles from "../styles/ImageInput.module.css"; 
import ErrorMessage from "./ErrorMessage";
const ImageInput = ({register, errors}) => {
   return (
      <div className={`w-full flex flex-col gap-1 ${styles.ImageInput}`}>
         <label
            htmlFor="image"
            className="flex items-center gap-4 px-2 py-3 w-full 
           border-2 rounded-lg"
         >
            <RiImageAddFill className="w-20  h-20 text-secondary"></RiImageAddFill>
            <input
               type="file"
               id="image"
               placeholder="image"
               className=""
               {...register("image", {
                  required: "must upload an image",
               })}
            />
         </label>
         {errors.image  && <ErrorMessage>{errors.image.message}</ErrorMessage>}
      </div>
   );
};

export default ImageInput;
