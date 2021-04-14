import { checkAccessToken } from "../../utils";
import { connect, MapStateToProps } from "react-redux";
import { Container } from "../Container/Container";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../../store/types";
import React from "react";

interface StateProps {
  isAuth: boolean;
}

interface OwnProps {
  exact?: boolean;
  secured?: boolean;
  onlyPublic?: boolean;
  path: string;
  layout?: any;
  component: any;
}

type Props = OwnProps & StateProps;

export const PagePresenter: React.FC<Props> = ({
  secured = false,
  onlyPublic = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth,
}) => {
  if (secured && !isAuth) {
    return <Redirect to={"/auth"} />;
  }
  if (onlyPublic && isAuth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Route exact={exact} path={path}>
      <Layout path={path}>
        <Container>
          <ErrorBoundary errorComponent={<h1>Произошла ошибка</h1>}>
            <Component />
          </ErrorBoundary>
        </Container>
      </Layout>
    </Route>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken),
});

export const Page = connect(mapStateToProps)(PagePresenter);
