import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error({ error, resetErrorBoundary }: any) {
  const { status } = error.response;
  const isNotAuthorized = status === 401 || status === 403;
  const navigate = useNavigate();

  useEffect(() => {
    if (isNotAuthorized) {
      navigate("/login");
    } else {
      resetErrorBoundary();
    }
  }, []);

  return <div></div>;
}
