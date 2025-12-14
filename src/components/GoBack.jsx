import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex item-center cursor-pointer justify-center mb-10 items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
    >
      ← Back
    </button>
  );
}
