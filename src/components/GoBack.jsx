import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-10 flex cursor-pointer items-center justify-center gap-2 text-sm font-medium text-[var(--app-muted)] transition hover:text-[var(--app-text)]"
    >
      <FiArrowLeft size={16} />
      Back
    </button>
  );
}
