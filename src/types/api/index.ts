export interface ApiError {
  status: number;
  message: { detail: string };
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  /**
   * If there's a request or revalidation loading.
   */
  isValidating: boolean;
  /**
   * If there's a request loading.
   */
  isLoading: boolean;
}

export type PaginationMetadata = {
  next_page?: string | null;
  prev_page?: string | null;
};
