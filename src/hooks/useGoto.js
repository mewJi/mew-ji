import { useHistory } from 'react-router-dom';

export default function useGoto() {
  let history = useHistory();

  return function goto(url) {
    return function () {
      history.push(url);
    };
  };
}
