const BASE_PATH = "/api/v1";

export const Apis = {
  Auth: {
    Login: `${BASE_PATH}/ju-member/auth/login`,
    GetMe: `${BASE_PATH}/ju-member/auth/me`,
  },
};

export const queryKeys = {
  GET_ME: "getMe",
};

// Common API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface RequestParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

export interface BaseRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}
