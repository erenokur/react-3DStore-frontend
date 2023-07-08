import React from "react";
import { Link, useParams } from "react-router-dom";

interface ErrorPageProps {
  errorCode?: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode }) => {
  const { errorCode: paramErrorCode } = useParams<{ errorCode?: string }>();
  let errorMessage: string;

  const finalErrorCode = errorCode ?? parseInt(paramErrorCode!);

  switch (finalErrorCode) {
    case 401:
      errorMessage = "401 - Unauthorized";
      break;
    case 404:
      errorMessage = "404 - Not Found";
      break;
    default:
      errorMessage = "An error occurred";
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">{errorMessage}</h1>
      <p className="text-gray-600">
        Sorry, the page you requested was not found.
      </p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
