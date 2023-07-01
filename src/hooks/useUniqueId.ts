import { useId } from 'react';

type UseUniqueIdReturnType = {
  id: string;
  url: string;
};

const useUniqueId = (): UseUniqueIdReturnType => {
  const id = useId();
  const url = `url(#${id})`;

  return { id, url };
};

export default useUniqueId;
