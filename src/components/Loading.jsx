const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center gap-2">
      <div
        className="w-8 h-8 border-4 border-[#e99355] border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      />
      <p className="text-[#333] text-sm font-medium animate-pulse">{text}</p>
    </div>
  );
};

export default Loading;
