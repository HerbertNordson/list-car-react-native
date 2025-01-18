import { Container, Title } from "@/components/ui/styles/global";
import { BrandsApi } from "@/services/api/brands";
import { DetailsScreenProps } from "@/types/routes";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { BackButton, HeaderModel } from "./style";

import Feather from "@expo/vector-icons/Feather";
import { Card, CardCode, CardTitle } from "@/components/theme/Card";

const Model: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
  const [data, setData] = useState<Array<Model>>([] as Array<Model>);
  const [isLoading, setIsLoading] = useState(false);

  const { getFromId } = BrandsApi();
  const { id } = route.params;

  function parseCarData(value: string) {
    const [year, ...fuelParts] = value.split(" ");

    const fuel = fuelParts.join(" ");

    return {
      year: parseInt(year, 10),
      fuel,
    };
  }

  const Item = ({ nome, codigo }: Model) => (
    <Card>
      <CardCode>{codigo}</CardCode>
      <CardTitle>Year: {parseCarData(nome).year}</CardTitle>
      <CardTitle>Fuel: {parseCarData(nome).fuel}</CardTitle>
    </Card>
  );

  useEffect(() => {
    setIsLoading(true);

    async function getList() {
      const res = await getFromId(id);

      if (res) {
        setIsLoading(false);
        return setData(res.anos);
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
      <HeaderModel>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={40} />
        </BackButton>
        <Title>Model</Title>
      </HeaderModel>
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

export default Model;
