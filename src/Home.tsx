import { observer } from "mobx-react-lite";
interface Props {
  store: any;
}

function Home({ store }: Props) {
  const changeUser = () => {
    store.updateUser("new name");
  };
  const addSubject = () => {
    store.addSubject("blob");
  };

  const removeSubject = (name: string) => {
    store.removeSubject(name);
  };
  return (
    <>
      <h1>{store.userInfo.name + " " + store.userInfo.id} </h1>
      <button onClick={changeUser}>click</button>
      <button onClick={addSubject}>addSubject</button>
      <ul>
        {store.userInfo.subject.map((subject: string) => {
          return (
            <li onClick={() => removeSubject(subject)} key={subject}>
              {subject}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default observer(Home);
