import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../services/apiYoutube";

export function useYoutube() {
  const {
    isLoading,
    data: videoLists,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  return { isLoading, videoLists, error };
}
