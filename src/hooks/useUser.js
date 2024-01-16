import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authService";

export default function useUser() {
  const { isLoading: loadingUser, data } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
  const { user } = data || [];
  return { loadingUser, user };
}
