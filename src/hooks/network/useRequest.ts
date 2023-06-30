import useSWR, { SWRConfiguration } from 'swr';
import { ApiError, ApiResponse } from 'types/api';
import fetcher, { FetcherOptions } from 'hooks/network/useFetcher';

type UseRequestParameters<T> = {
  uri: string;
  token: string;
  options?: SWRConfiguration<T>;
  fetcherOptions?: FetcherOptions;
};

/**
 * `useSWR` default options
 */
const defaultOptions: SWRConfiguration = {
  onErrorRetry: (error: ApiError, key, config, revalidate, { retryCount }) => {
    // Only retry on 404s up to 5 times
    if (error.status === 404 && retryCount > 5) return;
  },
};

/**
 * Custom hook for HTTP GET Requests.
 */
const useRequest = <T>({
  uri,
  token,
  options,
  fetcherOptions,
}: UseRequestParameters<T>): ApiResponse<T> => {
  // Fetch data only if the `uri` and `token` are not empty strings.
  // https://swr.vercel.app/docs/conditional-fetching
  const { data, error, isValidating, isLoading } = useSWR<T, ApiError>(
    uri,
    uri && token ? (): Promise<T> => fetcher<T>({ uri, token, fetcherOptions }) : null,
    {
      ...defaultOptions,
      ...options,
    }
  );

  return { data, error, isValidating, isLoading };
};

export default useRequest;
