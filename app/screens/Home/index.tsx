import { Container } from "@/components/ui/styles/global";
import { BrandsApi } from "@/services/api/brands";
import { DetailsScreenProps } from "@/types/routes";
import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Header } from "@/components/theme/Header";
import { Card, CardCode, CardTitle } from "@/components/theme/Card";

const Home: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const [data, setData] = useState<Array<Model>>([] as Array<Model>);
  const [isLoading, setIsLoading] = useState(false);

  const { getAll } = BrandsApi();

  const Item = ({ nome, codigo }: Model) => (
    <Card onPress={() => navigation.navigate("Model", { id: codigo })}>
      <CardCode>Cod: {codigo}</CardCode>
      <CardTitle>{nome}</CardTitle>
    </Card>
  );

  useEffect(() => {
    setIsLoading(true);

    async function getList() {
      const res = await getAll();

      if (res) {
        setIsLoading(false);
        return setData(res);
      }

      setIsLoading(false);
      return alert("error");
    }

    getList();
  }, []);

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator color={"#252525"} />
      </Container>
    );

  return (
    <Container>
      <Header page={"Home"} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item nome={item.nome} codigo={item.codigo} />
        )}
        keyExtractor={(item) => item.codigo}
        style={{ width: "100%" }}
      />
    </Container>
  );
};

export default Home;
