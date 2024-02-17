export default function MainContainer({ children }) {
  return (
    <div className="block bg-slate-50 w-full min-h-main my-32 mx-60 rounded-xl">
      {children}
    </div>
  );
}
