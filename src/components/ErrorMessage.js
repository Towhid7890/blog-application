import { IoCloseCircle } from "react-icons/io5";

const ErrorMessage = ({ children }) => {
   return (
      <p className="text-red-600 font-medium text-base flex items-center gap-2">
         <IoCloseCircle></IoCloseCircle>
         <span>{children}</span>
      </p>
   );
};

export default ErrorMessage;
