import { AboutPage } from "./AboutPage/AboutPage";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { AuthorsPage } from "./AuthorsPage/AuthorsPage";
import { AuthPage } from "./AuthPage/AuthPage";
import { BooksPage } from "./BooksPage/BooksPage";
import { CatalogPage } from "./CatalogPage/CatalogPage";
import { Error404Page } from "./Error404Page/Error404Page";
import { GenresPage } from "./GenresPage/GenresPage";
import { LanguagesPage } from "./LanguagesPage/LanguagesPage";
import { Page } from "../components/Page/Page";
import { PublishersPage } from "./PublishersPage/PublishersPage";
import { Redirect, Switch } from "react-router-dom";
import { SignUpPage } from "./SignUpPage/SignUpPage";
import React from "react";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/ref"} />
      <Redirect exact from={"/auth"} to={"/auth/login"} />
      <Page path={"/auth/login"} layout={AuthLayout} component={AuthPage} />
      <Page path={"/auth/sign-up"} layout={AuthLayout} component={SignUpPage} />
      <Page exact secured path={"/ref"} component={CatalogPage} />
      <Page secured path={"/ref/books"} component={BooksPage} />
      <Page secured path={"/ref/authors"} component={AuthorsPage} />
      <Page secured path={"/ref/genres"} component={GenresPage} />
      <Page secured path={"/ref/publishers"} component={PublishersPage} />
      <Page secured path={"/ref/languages"} component={LanguagesPage} />
      <Page secured path={"/about"} component={AboutPage} />
      <Page path={"*"} layout={AuthLayout} component={Error404Page} />
    </Switch>
  );
};
