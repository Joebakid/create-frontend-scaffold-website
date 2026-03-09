import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center cursor-pointer justify-center mb-10 gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
    >
      <FiArrowLeft size={16} />
      Back
    </button>
  );
}