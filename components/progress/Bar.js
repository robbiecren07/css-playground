import { Box } from '@chakra-ui/react'

export const Bar = ({ animationDuration, progress }) => (
  <Box position="absolute" left="0" top="0" z-index="50" w="100%" h="3px" bg="#fff" transform="translateX(0)"
    style={{
      transform: `translateX(${progress * 100}%)`,
      transition: `transform ${animationDuration}ms linear`,
    }}
  ></Box>
)