const PrimaryButton = ({ children, isDirty, isValid }) => {
   return (
      <button
         disabled={!isDirty || !isValid}
         className="children-xl uppercase  font-bold bg-secondary rounded-lg px-2 py-2 hover:scale-75 duration-1000"
        
      >
         {children}

      </button>
   );
};

export default PrimaryButton;
