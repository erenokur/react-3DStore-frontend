import React from "react";
import Dropdown from "src/components/general/dropdownMenu";
import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/AuthContext";
import history from "src/context/routerHistory";
import { FaUserAlt } from "react-icons/fa";

const Header = ({ hideLoggingInfo }: { hideLoggingInfo?: boolean }) => {
  const { t, i18n } = useTranslation("translation", { useSuspense: false });
  const { getUser, logout, user } = useAuth();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const logoutRequest = () => {
    console.log("logout");
    logout();
  };

  const loginRequest = () => {
    history.push("/login");
  };

  const gotoHome = () => {
    history.push("/");
  };

  const gotoProfile = () => {
    history.push("/profile");
  };

  const renderUserOptions = () => {
    if (!user) return null;

    const welcome = {
      label: `Welcome, ${user}`,
      onClick: gotoProfile,
    };

    const logoutMessage = {
      label: "Logout",
      onClick: logout,
    };

    return <Dropdown options={[welcome, logoutMessage]} />;
  };

  const renderUserButton = () => {
    if (!user) {
      return (
        <button className="text-white ml-4" onClick={() => loginRequest()}>
          {t("loginButton")}
        </button>
      );
    } else {
      return <div className="text-white ml-4"></div>;
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray py-4 px-6">
      <button className="text-lg font-bold" onClick={() => gotoHome()}>
        {t("headerTitle")}
      </button>
      <div className="flex items-center ml-4">
        {i18n.language === "tr" ? (
          <div
            className="flex items-center cursor-pointer mr-4"
            onClick={() => changeLanguage("en")}
          >
            <img src="/images/US.svg" alt="flag" className="w-6 h-6" />
            <button className="ml-2 text-white pointer-events-none">EN</button>
          </div>
        ) : (
          <div
            className="flex items-center cursor-pointer mr-4"
            onClick={() => changeLanguage("tr")}
          >
            <img src="/images/TR.svg" alt="flag" className="w-6 h-6" />
            <button className="ml-2 text-white pointer-events-none">TR</button>
          </div>
        )}
        {!hideLoggingInfo && (
          <div className="user-options">{renderUserOptions()}</div>
        )}
        {hideLoggingInfo ? null : renderUserButton()}
      </div>
    </div>
  );
};

export default Header;
