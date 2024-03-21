import { useEffect } from "react";
import Layout from "./Layout/Layout";
import TaskList from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksOps";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import TaskForm from "./TaskForm/TaskForm";
import TextFilter from "./TextFilter/TextFilter";
import { selectError, selectLoading } from "../redux/tasksSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <TaskForm />
      <TextFilter />
      {error && <Error>Error message</Error>}
      {loading && <Loader>Loading message</Loader>}
      <TaskList />
    </Layout>
  );
}
