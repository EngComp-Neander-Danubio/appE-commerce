import { Flex, Text } from "@chakra-ui/react";
import { typeHamburguer } from "../types/image.type";
import { CardMain } from "../geral/cardMain/CardMain";
// a API deve retornar uma lista de bebidas contendo para cada uma
// nome, preço, descrição e imagem
export const ListHumburger: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        pos={"static"}
        mt={{ xl: 0, lg: 0, md: 0, sm: 2, base: 2 }}
        p={1}
        //mb={20}
        marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
        marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1200px" }}
      >
        {/* os tipos devem vir da API*/}
        <Text fontWeight={600} fontSize={"24px"}>
          Humbúrgueres
        </Text>
        <Flex
          flexDirection={"row"}
          align={"center"}
          justify={"center"}
          gap={1}
          display={"grid"}
          gridTemplateColumns={{
            xl: "1fr 1fr",
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr",
            base: "1fr",
          }}
          w={{ xl: "fit-content", lg: "fit-content" }}
        >
          {typeHamburguer.map((name, index) => (
            <>
              <CardMain
                key={index}
                descriptionProduct={name.label}
                nameProduct={name.label}
                valueProduct={name.price}
                src={name.value}
              />
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
