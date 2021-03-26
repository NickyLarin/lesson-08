import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Route } from "react-router-dom";
import React from "react";

interface Props {
  exact?: boolean;
  secured?: boolean;
  path: string;
  layout?: any;
  component: any;
}

export const Page: React.FC<Props> = ({
  secured = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
}) => {
  return (
    <Route exact={exact} path={path}>
      <Layout path={path}>
        <Component />
      </Layout>
    </Route>
  );
};
