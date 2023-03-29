const PrimaryButton = ({ children, isDirty, isValid }) => {
   return (
      <button
         disabled={!isDirty || !isValid}
         className="children-xl font-bold bg-secondary rounded-lg px-2 py-[6px] hover:scale-[0.99] duration-1000"
        
      >
         {children}

      </button>
   );
};

export default PrimaryButton;
