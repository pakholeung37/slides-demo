import React from "react"
import { Box, Image, Text, VStack } from "@chakra-ui/react"

export function DesignSystem() {
  return (
    <Box as="figure" rounded="xl" backgroundColor="gray.100" p={8} mx={4}>
      <Image
        src="/avatar.jpg"
        width="384"
        height="512"
        w={32}
        h={32}
        rounded="50%"
        mx="auto"
      ></Image>
      <VStack pt={6} textAlign="center" spacing={4}>
        <Box as="blockquote">
          <Text fontSize="lg" fontWeight="semibold">
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </Text>
        </Box>
        <Box as="figcaption" textAlign="left" fontWeight="medium" w="100%">
          <Text color="red.600">Miss Hester Gulgowski</Text>
          <Text color="gray.500">Investor</Text>
        </Box>
      </VStack>
    </Box>
  )
}
