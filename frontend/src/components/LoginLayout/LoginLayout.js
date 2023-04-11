import logo from "../../assets/logo.svg";
import stairMan from "../../assets/home_logo.svg";

import styles from "./LoginLayout.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const LoginLayout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeContainer}>
          <div className={styles.logoBx}>
            <img src={logo} />
          </div>
          <div className={styles.welcomeContent}>
            <h1>Welcome to Dellmatch</h1>
            <p>
              Wanna discover new technologies inside Dell? Try out Dellmatch
            </p>
            <div>
              <img src={stairMan} />
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
