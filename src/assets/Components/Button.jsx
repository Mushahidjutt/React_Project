function Button({ label ="Default Label", onClick, customClasses = "" }) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-8 ${customClasses}`}
      onClick={onClick}
    >
      <span>{label}</span>
      
    </button>
  );
}

export default Button;
