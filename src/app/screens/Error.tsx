import { useRouteError } from "react-router-dom";
import Tab from "@/components/Tab";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className='text-center'>Oops!</h1>
      <p className='text-center'>Sorry, an unexpected error has occurred.</p>
      <p className='text-center'>
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
  );
}