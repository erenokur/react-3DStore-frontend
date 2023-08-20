import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { useSuspense: false });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black-100">
      <h1 className="text-4xl font-bold mb-8">{t("greeting")}</h1>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => navigate("/login")}
      >
        {t("entranceButton")}
      </button>
    </div>
  );
};

export default Home;
