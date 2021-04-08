import "./PublishersPage.css";
import { apiPublisherGetAll } from "../../api/publisher";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import { Publisher } from "../../types/publisher";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("publishers-page");

export const PublishersPage: React.FC<Props> = () => {
  const [publishersList, setPublishersList] = useState<Publisher.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function setPublishers() {
      setLoading(true);
      const publishers = await apiPublisherGetAll();
      setPublishersList(publishers);
      setLoading(false);
    }
    setPublishers();
  }, []);

  const getTitle = (item: Publisher.Data) => item.name;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Издатели</h1>
        <ListCatalog loading={loading} items={publishersList} getTitle={getTitle} getText={() => null} />
      </Container>
    </div>
  );
};
