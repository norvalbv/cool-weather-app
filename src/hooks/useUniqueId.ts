import { useId } from 'react';

type UseUniqueIdReturnType = {
  id: string;
  url: string;
  hash: string;
};

const useUniqueId = (): UseUniqueIdReturnType => {
  const id = useId();
  const url = `url(#${id})`;
  const hash = `#${id}`;

  return { id, url, hash };
};

export default useUniqueId;
