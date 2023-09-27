import { observer } from "mobx-react-lite";

interface Props {
  store: any;
}

function About({ store }: Props) {
  return (
    <>
      <h1>{store.userInfo.name}</h1>
    </>
  );
}

export default observer(About)