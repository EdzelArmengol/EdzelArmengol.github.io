// CFG.js
import React from "react";
import {
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <Popover isLazy placement="top">
      <PopoverTrigger>
        <Button mx="2">Show CFG</Button>
      </PopoverTrigger>
      <PopoverContent
        maxW={["17em", null, "16em", null, null, "16em"]}
        _focus=""
        bg="gray.50"
        fontSize={["0.7em", "0.7em", "0.9em"]}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold">
          Context-free Grammar
        </PopoverHeader>
        <PopoverBody align="center">
          {!prob2 ? (
            <VStack>
              <Text>{"S → aWXYZ | bWXYZ"}</Text>
              <Text>{"W → aW | bW | Λ"}</Text>
              <Text>{"X → aa | bb"}</Text>
              <Text>{"Y → abW | baW"}</Text>
              <Text>{"Z → aba | baa"}</Text>
            </VStack>
          ) : (
            <VStack>
              <Text>{"S → 11WXYZ | OOWXYZ"}</Text>
              <Text>{"W → 1W | 0W | Λ"}</Text>
              <Text>{"X → 101 | 111 | 01"}</Text>
              <Text>{"Y → 1 | 0 | 1Y | 0Y"}</Text>
              <Text>{"Z → 1 | 0 | 11"}</Text>

            </VStack>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CFG;