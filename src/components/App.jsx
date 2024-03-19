import { useEffect } from "react";
import Layout from "./Layout/Layout";
import TaskList from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksOps";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import TaskForm from "./TaskForm/TaskForm";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks())
      .unwrap()
      .then((value) => {
        // console.log(value);
        toast.success("fetchTasks fulfilled");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("fetchTasks rejected");
      });
  }, [dispatch]);

  return (
    <Layout>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {error && <Error>Error message</Error>}
      {loading && <Loader>Loading message</Loader>}
      <TaskList />
      <Toaster />
    </Layout>
  );
}
