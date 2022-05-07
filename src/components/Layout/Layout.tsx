import ErrorMessageProvider from "../../ContextProviders/ErrorMessageContext";
import FormDataProvider from "../../ContextProviders/FormDataContext";
import FormLayout from "../FormLayout/FormLayout";

const Layout = () => {
  return (
    <>
      <ErrorMessageProvider>
        <FormDataProvider>
          <FormLayout />
        </FormDataProvider>
      </ErrorMessageProvider>
    </>
  );
};

export default Layout;
