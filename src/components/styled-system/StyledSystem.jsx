import React from "react"
import { Box, Text, Image, VStack } from "@chakra-ui/react"

export function StyledSystem() {
  return (
    <Box
      borderRadius="1rem"
      mx="1rem"
      p="2rem"
      backgroundColor="rgb(243, 244,246)"
    >
      <Image src="/avatar.jpg" alt="" w="8rem" h="8rem" rounded="50%" mx="auto"></Image>
      <VStack pt="1.5rem" textAlign="center" spacing="1rem">
        <Box>
          <Text as="p" fontWeight="600" fontSize="1.125rem">
            architecto reprehenderit nostrum sed aspernatur quaerat nobis.
          </Text>
        </Box>
        <Box fontWeight="500" textAlign="left" w="100%">
          <Text color="rgb(220, 38, 38)">Miss Hester Gulgowski</Text>
          <Text color="rgb(107, 114, 128)">Investor</Text>
        </Box>
      </VStack>
    </Box>
  )
}
